import firebase from 'firebase'
import 'firebase/firestore'


export default class DataStore {
  constructor(config) {
    this.config = config
    this.db     = null
  }

  init() {
    if (!this.db) {
      const { apiKey, authDomain, projectId } = this.config

      firebase.initializeApp({ apiKey, authDomain, projectId })

      this.db = firebase.firestore()
    }

    return this
  }

  getEpisodes({ orderBy, order }) {
    return this.db
      .collection('episodes')
      .orderBy(orderBy || 'datePosted', order || 'desc')
      .get()
      .then((results) => {
        let episodes = []
        results.forEach((ep) => episodes.push(ep.data()))
        return episodes
      })
  }
}
