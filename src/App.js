import React, {useState} from 'react'
//import styled from 'styled-components'
import content from './content'
import { EpisodeList } from './EpisodeList'
import { EpisodeViewer } from './EpisodeViewer'

content.episodes = [...content.episodes]

function App() {
  const [activeEpisode, setActiveEpisode] = useState(content.episodes[0]);

  const onEpisodeClick = (episode) => {
    setActiveEpisode(episode);
  }

  return (
    <div className="App">
      <EpisodeViewer episode={activeEpisode}></EpisodeViewer>
      <EpisodeList onEpisodeClick={onEpisodeClick} episodes={content.episodes}></EpisodeList>
    </div>
  )
}

export default App