import React, {useState} from 'react'
//import styled from 'styled-components'
import content from './content'
import { EpisodeList } from './EpisodeList'
import { EpisodeViewer } from './EpisodeViewer'
import { DesktopPlayBar } from './PlayBar'
import './App.css'

content.episodes = [...content.episodes]

function App({ store }) {
  const [episodes, setEpisodes] = useState([])
  // TODO pass in a blank episode while loading
  const [activeEpisode, setActiveEpisode] = useState(content.episodes[0]);

  if (episodes.length < 1) {
    store.getEpisodes({}).then((data) => {
      setEpisodes(data)
      setActiveEpisode(data[0])
    })
  }
  const onEpisodeSort = (sortDescending) => {
    store.getEpisodes({
      orderBy: 'datePosted',
      order: sortDescending ? 'desc' : 'asc',
    }).then((data) => {
      setEpisodes(data)
      setActiveEpisode(data[0])
    })
  }
  const onEpisodeClick = episode => setActiveEpisode(episode)

  const [player, setPlayer] = useState({
    isPlaying: false,
    progress: 80000
  })

  // TODO loading state
  // TODO error boundary for EpisodeViewer
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
        onEpisodeSort={onEpisodeSort}
        episodes={episodes}
      />
    </div>
  )
}

export default App
