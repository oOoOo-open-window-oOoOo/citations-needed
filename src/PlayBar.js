import React, {useCallback, useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import TimelineArea from './TimelineArea'

const Logo = styled.img`
  width: 120px;
  height: 110px;
`
const Player = styled.div`
  width: 100%;
  display: flex;
  height: 67px;
`
const Bar = styled.header`
  background: black;
  color: white;
  display: flex;
  & ${Logo} {
    flex: 0 0 120px;
  }
  & .right-area {
    margin-left: 12px;
    width: 100%;
    & nav {
      margin-top: 4px;
      margin-bottom: 10px;
      align-items: baseline;
      display: flex;
      & h1 {
        margin: 0;
        position: relative;
        top: 3px;
      }
      & a.home {
        text-decoration: none;
      }
      & a {
        color: inherit;
        margin-right: 20px;
      }
      & .search {
        margin-left: auto;
        text-decoration: none;
      }
    }
  }
`
const Controls = styled.div`
  flex: 0 0 282px;
  display: flex;
  & button {
    width: 100%;
    flex-shrink: 1;
    background: white;
    margin-right: 3px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
`

export const DesktopPlayBar = ({title, logoSrc, donationLink, activeEpisode, player}) => {
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false) //state variables for isPlaying, initialized to false
  const [currentTime, setCurrentTime] = useState(0) //state variables for currentTime, initialized to 0

  const onPlayButtonClick = useCallback(() => {
    if (!playerRef.current) return // checks to make sure playerRef.current isn't empty
    /* toggles audio on / off, using ref defined in the <audio> tag below | requires array of variable dependencies */
    isPlaying ? playerRef.current.pause() : playerRef.current.play()
  }, [isPlaying])

  // If active episode changes, reset player
  useEffect(() => {
    setIsPlaying(false)
    setCurrentTime(0)
  }, [activeEpisode])

  const skipForward = useCallback(() => {
    playerRef.current.currentTime = playerRef.current.currentTime + 5
  }, [])

  const skipBackward = useCallback(() => {
    playerRef.current.currentTime = playerRef.current.currentTime - 5
  }, [])

  // Seeking
  const onSeek = useCallback((time) => {
    setCurrentTime(time)
    playerRef.current.currentTime = time
  }, [])

  return (
    <Bar>
      <Logo src={logoSrc} />
      <div className="right-area">
        <nav>
          <a href="/" className="home"><h1>{title}</h1></a>
          <a href="/about">About</a> 
          <a href={donationLink.url} target="_blank" rel="noopener noreferrer">{donationLink.name}</a> 
          <a href="/search" className="search">Search</a>
          {/* to replace with component later */}
        </nav>
        <Player>
          {/* audio tag loads in audio file, creates a ref so that it can be accessed elsewhere */}
          <audio 
            src={activeEpisode.audioLink} 
            ref={playerRef} 
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setIsPlaying(false)}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          />
          <TimelineArea 
            episode={activeEpisode} 
            currentTime={currentTime}
            onSeek={onSeek}
          />
          <Controls>
            {!isPlaying && currentTime === 0 ? (
              <button onClick={onPlayButtonClick}>
                Start Episode
              </button>
            ) : (
              <>
                <button onClick={skipBackward}>
                  -5s
                </button>
                <button onClick={onPlayButtonClick}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={skipForward}>
                  +5s
                </button>
              </>
            )}
          </Controls>
        </Player>
      </div>
    </Bar>
  )
}

export const MobilePlayBar = ({title, logoSrc}) => {
  return (
    <Bar>
      <Logo src={logoSrc} />
    </Bar>
  )
}