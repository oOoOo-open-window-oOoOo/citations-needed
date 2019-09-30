import React from 'react'
import styled from 'styled-components'
import TextTruncate from 'react-text-truncate'

const Preview = styled.li`
  display: flex;
  color: white;
  background: black;
  height: 164px;
  overflow: hidden;
  border-bottom: 1px solid white;
  font-size: 14px;
  --margin: 22px;
  & .cover-image {
    width: 120px;
    height: 120px;
    flex: 0 0 auto;
    margin: var(--margin) 18px var(--margin) var(--margin);
  }
  & .metadata {
    text-align: left;
    width: 428px;
    flex: 0 0 auto;
  }
  & .title {
    font-size: 20px;
  & h3 {
    margin: var(--margin) 0 8px 0;
  }
  }
  & .content-warning {
    display: inline-block;
    background-color: white;
    color: black;
    padding: 2px 4px 2px 4px;
    margin-bottom: 8px;
  }
  & .date-runtime {
    font-size: 14px;
  }
  & .description {
    min-width: 100px; /* addresses text truncate bug */
    text-align: left;
    flex: 1 1 auto;
    margin: var(--margin);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4em;
  }
  @media screen and (max-width: 812px) /* mobile */ {
    height: 132px;
    --margin: 12px;
    align-items: center;
    & .cover-image {
      height: 108px;
      width: 108px;
      margin-right: var(--margin);
    }
    & .metadata {
      flex: 1 1 auto;
      margin-right: var(--margin);
    }
    & .description {
      display: none;
    }
    & .title {
      font-size: 12px;
    }
    & .date-runtime {
      font-size: 12px;
      margin-bottom: var(--margin);
    }
    & .content-warning {
      font-size: 10px;
      font-weight: 700;
    }
    & .description {
      font-size: 12px;
    }
  }
`

export const EpisodePreview = ({episode}) => {
  return (
    <Preview>
      <img className="cover-image" src={episode.coverImage} />
      <div className="metadata">
        <div className="title">
          <h3>{episode.title}</h3>
        </div>
        {episode.contentWarning &&
          <div className="content-warning">{episode.contentWarning}</div>
        }
        <div className="date-runtime"><span>{episode.datePosted}</span> | <span>{episode.runtime}</span></div>
      </div>
      <div className="description">
        <TextTruncate
          line={6}
          element="span"
          truncateText="…"
          text={episode.description}
          textTruncateChild={<a href="#"></a>}
        />
      </div>
    </Preview>
  )
}

export const EpisodeList = styled.ol`
  margin: 0;
  padding: 0;
`
