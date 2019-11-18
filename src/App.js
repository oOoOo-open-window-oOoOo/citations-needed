import React, {useState} from 'react'
//import styled from 'styled-components'
import content from './content.json'
import { EpisodeList } from './EpisodeList'
import { EpisodeViewer } from './EpisodeViewer'
import { DesktopPlayBar } from './PlayBar'
import './App.css'

function App() {
  const [activeEpisode, setActiveEpisode] = useState(content.episodes[0]);

  const onEpisodeClick = episode => setActiveEpisode(episode)

  return (
    <div className="App">
      <DesktopPlayBar 
        donationLink={content.about.donationLink} 
        logoSrc={content.about.logo} 
        title={content.about.title} 
        activeEpisode={activeEpisode}
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