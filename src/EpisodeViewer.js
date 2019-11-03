import React from 'react'
import styled from 'styled-components'
import {toDate} from './helpers/date' //imports date helper methods
import TextTruncate from 'react-text-truncate'

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

export const EpisodeViewer = ({episode}) => {
  return (
    <Viewer>
      <img className="cover-image" alt={`Episode artwork`} src={episode.coverImage} />
      <div className="episodeInfo">
        <div className="metadata">
          <div className="title">
            <h3>{episode.title}</h3>
          </div>
          <div className="date-runtime"><span>{toDate(episode.datePosted).toLocaleDateString()}</span> • <span>{episode.runtime}</span></div>
          {episode.contentWarning &&
            <div className="content-warning">content warning: {episode.contentWarning}</div>
          }
        </div>
        <div className="description">
          <TextTruncate
            line={9}
            element="span"
            truncateText="…"
            text={episode.description}
            textTruncateChild={<span></span>}
          />
        </div>
      </div>
    </Viewer>
  )
}
