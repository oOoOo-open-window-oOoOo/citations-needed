const Parser = require('rss-parser')
const parser = new Parser()
const fs = require('fs')
const mergeByKey = require('array-merge-by-key')

// Terminal colors
const GREEN_COLOR = '\x1b[32m'
const CYAN_COLOR = '\x1b[36m'
const RED_COLOR = '\x1b[31m'
const RESET_COLOR = '\x1b[0m'

// Arguments 
if (process.argv.length === 2) {
  console.error(RED_COLOR, 'Expected one argument: RSS_URL')
  process.exit(1)
}
const RSS_URL = process.argv[2]

// Duration parser
// https://stackoverflow.com/a/9640417
// string: 'HH:MM:SS' or 'MM:SS' or 'SS'
const hmsToSeconds = (string) => {
  let p = string.split(':')
  let s = 0
  let m = 1
  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10)
    m *= 60
  }
  return s
}

const about = (feed) => ({
  title: feed.title,
  logo: feed.image.url,
  // Manual for now
  donationLink: {
    name: 'Support us on Patreon',
    url: 'https://www.patreon.com/citationsneededpodcast'
  }
})

const episode = (ep) => ({
  audioLink: ep.link,
  coverImage: ep.itunes.image,
  datePosted: ep.isoDate,
  description: ep.content,
  duration: hmsToSeconds(ep.itunes.duration),
  id: ep.guid,
  title: ep.title,
  // Empty properties
  contentWarning: '',
  content: []
})

const updateContentFromRSS = async (url) => {
  console.log(CYAN_COLOR, `Fetching RSS from ${url}.`, RESET_COLOR)
  const feed = await parser.parseURL(url).catch(error => {
    console.error(RED_COLOR, error.message + '\n', RESET_COLOR, error)
    process.exit(1)
  })
  console.log(CYAN_COLOR, `Found ${feed.items.length} episodes.`, RESET_COLOR)
  
  const localContent = JSON.parse(fs.readFileSync('./src/content.json', 'utf8'))
  
  // Merge RSS with local episodes, giving priority to local ones.
  // Episodes with the same id are merged.
  console.log(CYAN_COLOR, `Merging with local content.`, RESET_COLOR)
  const episodes = mergeByKey('id', feed.items.map(episode), localContent.episodes)

  const newContent = {
    ...localContent,
    about: about(feed),
    metadata: {
      description: feed.description,
      image: feed.image.url,
      title: feed.title
    },
    episodes
  }

  console.log(CYAN_COLOR, `Updating content file.`, RESET_COLOR)
  await fs.writeFile('./src/content.json', JSON.stringify(newContent, null, 2), error => {
    if (error) throw error
  })
  console.log(GREEN_COLOR, 'Done.', RESET_COLOR)
}

updateContentFromRSS(RSS_URL)