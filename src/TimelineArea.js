import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { useEvent, useMount } from 'react-use'

const Outer = styled.div`
  width: 100%;
  position: relative;
  margin-right: 18px;
  & h2 {
    font-size: inherit;
    font-weight: normal;
    margin: 0;
  }
`
const Gap = styled.div`
  position: absolute;
  width: 6px;
  height: 8px;
  background: black;
  top: 9px;
`

const Bar = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  height: 8px;
  top: 9px;
  transform-origin: left center;
`

const Playhead = styled.button`
  top: 0;
  left: 0;
  position: absolute;
  width: 8px;
  height: 22px;
  background: var(--citations-yellow);
  border: 2px solid black;
  box-sizing: content-box;
  cursor: grab;
`
const Timeline = styled.div`
  position: relative;
  margin-top: 10px;
`

const TimelineArea = ({episode, currentTime, onSeek}) => {
  const [isSeeking, setIsSeeking] = useState(false)

  const timeline = useRef(null)
  const playhead = useRef(null)
  const [timelineRect, setTimelineRect] = useState({width: 0, height: 0, left: 0, top: 0})
  useMount(() => {
    setTimelineRect(timeline.current.getBoundingClientRect())
  })
  useEvent('resize', () => {
    setTimelineRect(timeline.current.getBoundingClientRect())
  })

  const seek = useCallback(e => {
    const {width, left} = timelineRect
    const MOUSE_OFFSET = 8
    const playheadLeft = e.clientX - left - MOUSE_OFFSET
    const ratioLeft = Math.max(0, Math.min(playheadLeft / width, 1))
    const time = episode.duration * ratioLeft
    onSeek(time)
  }, [onSeek, episode.duration, timelineRect])
  useEvent('mousemove', isSeeking ? seek : undefined)

  const onSeekStart = useCallback(() => {
    setIsSeeking(true)
  }, [])

  const onSeekEnd = useCallback(() => {
    setIsSeeking(false)
  }, [])
  useEvent('mouseup', isSeeking ? onSeekEnd : undefined)

  return (
    <Outer>
      <h2>{episode.title}</h2>
      <Timeline
        ref={timeline}
        onClick={seek}
      >
        <Bar />
        <Bar 
          style={{
            backgroundColor: 'var(--citations-yellow)',
            transform: `scaleX(${currentTime / episode.duration})`
          }}
        />
        {episode.content.map((content, index) => {
          return (
            <Gap 
              key={index} 
              style={{
                transform: `translateX(${(content.startTime / episode.duration) * timelineRect.width}px)`
              }} 
            />
          )
        })}
        <Playhead
          style={{
            transform: `translateX(${(currentTime / episode.duration) * timelineRect.width}px)`
          }}
          onMouseDown={onSeekStart}
          ref={playhead}
        />
      </Timeline>
    </Outer>
  )
}

export default TimelineArea