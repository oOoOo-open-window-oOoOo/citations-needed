import React, {useState} from 'react'
import styled from 'styled-components'
import {dateToString, stringToDate} from './helpers/date' //imports date helper methods
import TextTruncate from 'react-text-truncate'
import { DateToggle } from './DateToggle'

const Viewer = styled.div`
  display: flex;
  color: black;
  background: white;
  height: 650px;
  overflow: hidden;
  font-size: 18px;
  --margin: 34px;
  margin-right: 92px;
  & .cover-image {
    width: 450px;
    height: 450px;
    margin-left: var(--margin);
    align-self: center;
    flex: 0 0 auto;
  }
  & .episodeInfo {
    align-self: center;
  }
  & .metadata {
    margin-left: var(--margin);
  }
  & h3 {
    font-size: 36px;
  }
  & .content-warning {
    display: inline-block;
    background-color: white;
    color: black;
    padding: 2px 4px 2px 4px;
    margin-bottom: 8px;
    border: 2px solid black;
  }
  & .date-runtime {
    font-size: 24px;
    padding-bottom: 17px;
  }
  & .description {
    min-width: 100px; /* addresses text truncate bug */
    text-align: left;
    flex: 1 1 auto;
    margin: var(--margin);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4em;
    margin-right: 120px;
  }
  @media screen and (max-width: 812px) /* mobile */ {
  height: 430px;
  --margin: 12px;
  display: flex;
  margin-top: 20px;
  margin-right: 12px;
  flex-direction: column;
    & .cover-image {
      height: 154px;
      width: 154px;
      margin-right: var(--margin);
      align-self: center;
    }
    & .metadata {
      flex: 1 1 auto;
      align-self: center;
    }
    & .description {
      font-size: 14px;
    }
    & .title {
      font-size: 20px;
    }
    & h3 {
      font-size: 20px;
    }
    & .date-runtime {
      font-size: 14px;
      margin-bottom: var(--margin);
    }
    & .content-warning {
      font-size: 14px;
      font-weight: 700;
    }
    & .description {
      font-size: 14px;
      margin-right: 12px;
    }
  }
`

export const EpisodeViewer = ({episodes}) => {
  const [getActiveEpisode, setActiveEpisode] = useState(true)
  const activeEpisode =episodes[0];
  return (
    <Viewer>
      <img className="cover-image" src={activeEpisode.coverImage} />
      <div className="episodeInfo">
        <div className="metadata">
          <div className="title">
            <h3>{activeEpisode.title}</h3>
          </div>
          <div className="date-runtime"><span>{stringToDate(activeEpisode.datePosted).toLocaleDateString()}</span> • <span>{activeEpisode.runtime}</span></div>
          {activeEpisode.contentWarning &&
            <div className="content-warning">content warning: {activeEpisode.contentWarning}</div>
          }
        </div>
        <div className="description">
          <TextTruncate
            line={9}
            element="span"
            truncateText="…"
            text={activeEpisode.description}
            textTruncateChild={<a href="#"></a>}
          />
        </div>
      </div>
    </Viewer>
  )
}