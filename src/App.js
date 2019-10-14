import React from 'react'
import styled from 'styled-components'
import content from './content'
import { EpisodeList, EpisodePreview } from './EpisodeList'
import { EpisodeViewer } from './EpisodeViewer'

content.episodes = [...content.episodes]

function App() {
  return (
    <div className="App">
      <EpisodeViewer episodes={content.episodes}></EpisodeViewer>
      <EpisodeList episodes={content.episodes}></EpisodeList>
    </div>
  )
}

export default App