import React from 'react'
import styled from 'styled-components'
import content from './content'
import { EpisodeList, EpisodePreview } from './EpisodeList'

content.episodes = [...content.episodes, ...content.episodes, ...content.episodes, ...content.episodes, ...content.episodes, ...content.episodes, ...content.episodes, ...content.episodes]

function App() {
  return (
    <div className="App">
      <EpisodeList>
        {content.episodes.map((episode, index) => (
          <EpisodePreview episode={episode} key={index} />
        ))}
      </EpisodeList>
    </div>
  )
}

export default App