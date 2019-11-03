import React, {useState} from 'react'
//import styled from 'styled-components'
import content from './content'
import { EpisodeList } from './EpisodeList'
import { EpisodeViewer } from './EpisodeViewer'
import { DesktopPlayBar } from './PlayBar'
import './App.css'

content.episodes = [...content.episodes]

function App(props) {
  const store = props.store

  const [episodes, setEpisodes] = useState([])

  if (episodes.length < 1) {
    store.collection('episodes').get().then((result) => {
      let _episodes = []
      result.forEach((ep) => _episodes.push(ep.data()))
      setEpisodes(_episodes)
    })
  }
  const onEpisodeSort = () => {
    // https://firebase.google.com/docs/firestore/query-data/order-limit-data?authuser=1#order_and_limit_data
    console.log('TODO apply db sort here')
  }

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
        onEpisodeSort={onEpisodeSort}
        episodes={episodes}
      />
    </div>
  )
}

export default App
