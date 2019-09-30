export default {
  metadata: {
    title: 'Citations Needed',
    description: 'A podcast about the media, power, and the history of bullshit',
    image: './assets/logo.svg'
  },
  about: {
    title: 'Citations Needed',
    logo: './assets/logo.svg',
    coverImage: './assets/cover.png',
    shortDescription: 'A podcast about the media, power, and the history of bullshit',
    longDescription: `
      ...
    `,
    socialLinks: [
      { // SOCIAL LINK
        name: 'Facebook',
        url: 'https://facebook.com/citationsneeded'
      }
    ],
    donationLink: 'https://www.patreon.com/citationsneededpodcast'
  },
  episodes: [
    { // EPISODE
      id: 0,
      soundcloudId: 1234,
      runtime: "1 hour, 7 minutes",
      datePosted: "December 21, 2019",
      title: 'Episode 84: How Claims of “Sowing Discord” Silence Criticism of Power',
      coverImage: 'https://cdn1.player.fm/images/14302089/series/sPFCeeGeQ1hLU73v/512.png',
      contentWarning: 'Violence',
      description: `
        Freshman Congresswoman Alexandria Ocasio-Cortez taking to Twitter to criticize House Speaker Nancy Pelosi, we are told, “plays into the hands of Trump.” Russians are using Black Lives Matter and anti-fracking activists to “sow discord,” insists CNN. We must “be united” rather than “divided.”
            
        Everywhere we turn we are told by high-status pundits that we shouldn’t air our criticisms of power at this particular moment with any reasonable degree of severity lest our mutual enemies exploit these divisions to empower themselves. 
            
        We are told again and again that progressives criticizing party leaders is helping Trump. That fighting Trump’s racism is merely “playing into his hands,” that we shouldn’t attack other democrats in the primary too harshly lest it “give us four more years of Trump.”
            
        But there’s a major problem with this: There’s no evidence that intra-party fighting loses elections or assists the "other side." In many ways, it may actually help engage voters and make them feel heard, rather than viewed as box-checkers for the already anointed.
        We are joined by Maximillian Alvarez of the podcast Working People.
      `,
      content: [
        { // IMAGE
          id: 321,
          type: 'image',
          url: 'https://cdn1.player.fm/images/14302089/series/sPFCeeGeQ1hLU73v/512.png',
          caption: `Freshman Congresswoman Alexandria Ocasio-Cortez taking to Twitter to criticize House Speaker Nancy Pelosi`,
          startTime: 123012
        },
        { // TEXT
          id: 321,
          type: 'text',
          url: 'https://image.com/assets/aoc.jpg',
          text: `
            ## Freshman Congresswoman Alexandria Ocasio-Cortez
            - some more text
            - a list
          `,
          startTime: 123012
        },
        { // WEB CLIPPING
          id: 321,
          type: 'embed',
          html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p78q5T2fkcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          caption: `Freshman Congresswoman Alexandria Ocasio-Cortez taking to Twitter to criticize House Speaker Nancy Pelosi`,
          startTime: 122459
        }
      ],
      credits: `
        ...
      `,
      transcript: `
        ...
      `
    }
  ]
}