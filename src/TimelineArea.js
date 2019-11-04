import React from 'react'
import styled from 'styled-components'

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

const TimelineArea = ({episode, currentTime}) => {
  return (
    <Outer>
      <h2>{episode.title}</h2>
      <Timeline>
        <Bar />
        <Bar 
          style={{
            backgroundColor: 'var(--citations-yellow)',
            width: `${(currentTime / episode.duration) * 100}%`
          }} 
        />
        {episode.content.map((content, index) => {
          const xPosition = (content.startTime / episode.duration) * 100
          return (<Gap key={index} style={{left: `${xPosition}%`}} />)
        })}
        <Playhead
          style={{left: `${(currentTime / episode.duration) * 100}%`}}
        />
      </Timeline>
    </Outer>
  )
}

export default TimelineArea