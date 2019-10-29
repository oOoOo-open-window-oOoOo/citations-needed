import React, {useState} from 'react'
//import styled from 'styled-components'
import content from './content'
import { EpisodeList } from './EpisodeList'
import { EpisodeViewer } from './EpisodeViewer'
import { DesktopPlayBar } from './PlayBar'
import './App.css'

content.episodes = [...content.episodes]

function App() {
  const [activeEpisode, setActiveEpisode] = useState(content.episodes[0]);

  const onEpisodeClick = episode => setActiveEpisode(episode)

  const [player, setPlayer] = useState({
    isPlaying: false,
    progress: 80000
  })

  return (
    <div className="App">
      <DesktopPlayBar 
        donationLink={content.about.donationLink} 
        logoSrc={content.about.logo} 
        title={content.about.title} 
        activeEpisode={activeEpisode}
        player={player}
      />
      <EpisodeViewer episode={activeEpisode}></EpisodeViewer>
      <EpisodeList
        onEpisodeClick={onEpisodeClick}
        episodes={content.episodes}
      />
    </div>
  )
}

export default App