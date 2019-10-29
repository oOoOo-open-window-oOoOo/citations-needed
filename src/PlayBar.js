import React from 'react'
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
  console.log(player.isPlaying, player.progress, !player.isPlaying && player.progess === 0 )
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
          <TimelineArea episode = {activeEpisode} player={player}/>
          <Controls>
            {!player.isPlaying && player.progress === 0 ? (
              <button>
                Start Episode
              </button>
            ) : (
              <>
                <button>
                  Prev
                </button>
                <button>
                  {!player.isPlaying ? "Pause" : "Play"}
                </button>
                <button>
                  Next
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