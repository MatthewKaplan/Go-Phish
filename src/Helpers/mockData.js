const mockSong = [
  {
    id: 518,
    slug: "the-moma-dance",
    title: "The Moma Dance",
    tracks_count: 158
  }
];

const mockVenue = [
  {
    country: "USA",
    id: 803,
    location: "Bend, OR",
    name: "Les Schwab Amphitheatre",
    show_dates: ["2015-07-21", "2015-07-22"],
    show_ids: [1815, 1816],
    shows_count: 2,
    slug: "les-schwab-amphitheatre"
  }
];

const mockMember = [
  {
    id: 1,
    member: "Trey Anastasio",
    date_of_birth: "September 30, 1964",
    born: "Fort Worth, Texas",
    side_projects:
      "Trey Anastasio Band, Trey Anastasio Trio, Ghosts of the Forest",
    image: "https://i.imgur.com/bde0mQu.jpg",
    also_known_as:
      "Big Red, the Bad Lieutenant, Giuseppe, The Skinny Guinea, Troy, Matt Altaro",
    instruments: "Lead guitarist and vocals for Phish"
  }
];

const mockYears = [
  {
    date: "2018",
    show_count: 39
  }
];

const mockTours = [
  {
    ends_on: "2013-12-31",
    id: 90,
    name: "2013-14 New Years Run",
    shows_count: 4,
    slug: "2013-14-new-years-run",
    starts_on: "2013-12-28",
    shows: [
      {
        date: "2013-12-28",
        id: 1709,
        location: "New York, NY",
        tour_id: 90,
        venue_id: 408,
        venue_name: "Madison Square Garden"
      },
      {
        date: "2013-12-29",
        id: 1708,
        location: "New York, NY",
        tour_id: 90,
        venue_id: 408,
        venue_name: "Madison Square Garden"
      },
      {
        date: "2013-12-30",
        id: 1702,
        location: "New York, NY",
        tour_id: 90,
        venue_id: 408,
        venue_name: "Madison Square Garden"
      },
      {
        date: "2013-12-31",
        id: 1703,
        location: "New York, NY",
        tour_id: 90,
        venue_id: 408,
        venue_name: "Madison Square Garden"
      }
    ]
  }
];

const mockUserShows = [
  {
    date: "2018-07-20",
    id: 1945,
    tour_id: 103,
    venue_name: "Gorge Amphitheatre",
    location: "George, WA",
    tracks: [
      {
        id: 32634,
        mp3: "https://phish.in/audio/000/032/634/32634.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1945,
        title: "Set Your Soul Free",
        song_ids: 1011
      },
      {
        id: 32635,
        mp3: "https://phish.in/audio/000/032/635/32635.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1945,
        title: "Wolfman's Brother",
        song_ids: 870
      },
      {
        id: 32636,
        mp3: "https://phish.in/audio/000/032/636/32636.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1945,
        title: "Roggae",
        song_ids: 644
      },
      {
        id: 32637,
        mp3: "https://phish.in/audio/000/032/637/32637.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1945,
        title: "Poor Heart",
        song_ids: 594
      },
      {
        id: 32638,
        mp3: "https://phish.in/audio/000/032/638/32638.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1945,
        title: "Undermind",
        song_ids: 810
      },
      {
        id: 32639,
        mp3: "https://phish.in/audio/000/032/639/32639.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1945,
        title: "Simple",
        song_ids: 688
      },
      {
        id: 32640,
        mp3: "https://phish.in/audio/000/032/640/32640.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1945,
        title: "Ya Mar",
        song_ids: 873
      },
      {
        id: 32641,
        mp3: "https://phish.in/audio/000/032/641/32641.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1945,
        title: "Sand",
        song_ids: 660
      },
      {
        id: 32642,
        mp3: "https://phish.in/audio/000/032/642/32642.mp3",
        position: 9,
        set_name: "Set 2",
        show_id: 1945,
        title: "Chalk Dust Torture",
        song_ids: 144
      },
      {
        id: 32643,
        mp3: "https://phish.in/audio/000/032/643/32643.mp3",
        position: 10,
        set_name: "Set 2",
        show_id: 1945,
        title: "My Friend, My Friend",
        song_ids: 532
      },
      {
        id: 32644,
        mp3: "https://phish.in/audio/000/032/644/32644.mp3",
        position: 11,
        set_name: "Set 2",
        show_id: 1945,
        title: "Fuego",
        song_ids: 911
      },
      {
        id: 32645,
        mp3: "https://phish.in/audio/000/032/645/32645.mp3",
        position: 12,
        set_name: "Set 2",
        show_id: 1945,
        title: "Sparkle",
        song_ids: 712
      },
      {
        id: 32646,
        mp3: "https://phish.in/audio/000/032/646/32646.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1945,
        title: "Halley's Comet",
        song_ids: 323
      },
      {
        id: 32647,
        mp3: "https://phish.in/audio/000/032/647/32647.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1945,
        title: "Light",
        song_ids: 447
      },
      {
        id: 32648,
        mp3: "https://phish.in/audio/000/032/648/32648.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1945,
        title: "Waste",
        song_ids: 828
      },
      {
        id: 32649,
        mp3: "https://phish.in/audio/000/032/649/32649.mp3",
        position: 16,
        set_name: "Set 2",
        show_id: 1945,
        title: "Rock and Roll",
        song_ids: 633
      },
      {
        id: 32650,
        mp3: "https://phish.in/audio/000/032/650/32650.mp3",
        position: 17,
        set_name: "Encore",
        show_id: 1945,
        title: "Tube",
        song_ids: 797
      },
      {
        id: 32651,
        mp3: "https://phish.in/audio/000/032/651/32651.mp3",
        position: 18,
        set_name: "Encore",
        show_id: 1945,
        title: "Golgi Apparatus",
        song_ids: 304
      }
    ],
    venue: {
      id: 284,
      slug: "gorge-amphitheatre",
      name: "Gorge Amphitheatre",
      other_names: [],
      latitude: 47.079022,
      longitude: -119.855882,
      shows_count: 19,
      location: "George, WA",
      updated_at: "2013-10-10T02:53:56Z"
    },
    showSaved: true
  }
];

const mockSetList = [
  {
    id: 30800,
    mp3: "https://phish.in/audio/000/030/800/30800.mp3",
    position: 1,
    set_name: "Set 1",
    show_id: 1852,
    title: "The Moma Dance",
    song_ids: 518
  },
  {
    id: 30801,
    mp3: "https://phish.in/audio/000/030/801/30801.mp3",
    position: 2,
    set_name: "Set 1",
    show_id: 1852,
    title: "AC/DC Bag",
    song_ids: 11
  },
  {
    id: 30802,
    mp3: "https://phish.in/audio/000/030/802/30802.mp3",
    position: 3,
    set_name: "Set 1",
    show_id: 1852,
    title: "555",
    song_ids: 918
  },
  {
    id: 30803,
    mp3: "https://phish.in/audio/000/030/803/30803.mp3",
    position: 4,
    set_name: "Set 1",
    show_id: 1852,
    title: "Waiting All Night",
    song_ids: 914
  },
  {
    id: 30804,
    mp3: "https://phish.in/audio/000/030/804/30804.mp3",
    position: 5,
    set_name: "Set 1",
    show_id: 1852,
    title: "Heavy Things",
    song_ids: 337
  },
  {
    id: 30805,
    mp3: "https://phish.in/audio/000/030/805/30805.mp3",
    position: 6,
    set_name: "Set 1",
    show_id: 1852,
    title: "Happy Birthday to You",
    song_ids: 327
  },
  {
    id: 30806,
    mp3: "https://phish.in/audio/000/030/806/30806.mp3",
    position: 7,
    set_name: "Set 1",
    show_id: 1852,
    title: "46 Days",
    song_ids: 4
  },
  {
    id: 30807,
    mp3: "https://phish.in/audio/000/030/807/30807.mp3",
    position: 8,
    set_name: "Set 1",
    show_id: 1852,
    title: "I Didn't Know",
    song_ids: 365
  },
  {
    id: 30808,
    mp3: "https://phish.in/audio/000/030/808/30808.mp3",
    position: 9,
    set_name: "Set 1",
    show_id: 1852,
    title: "Divided Sky",
    song_ids: 206
  },
  {
    id: 30809,
    mp3: "https://phish.in/audio/000/030/809/30809.mp3",
    position: 10,
    set_name: "Set 1",
    show_id: 1852,
    title: "Cavern",
    song_ids: 142
  },
  {
    id: 30810,
    mp3: "https://phish.in/audio/000/030/810/30810.mp3",
    position: 11,
    set_name: "Set 1",
    show_id: 1852,
    title: "Good Times Bad Times",
    song_ids: 306
  },
  {
    id: 30811,
    mp3: "https://phish.in/audio/000/030/811/30811.mp3",
    position: 12,
    set_name: "Set 2",
    show_id: 1852,
    title: "Carini",
    song_ids: 135
  },
  {
    id: 30812,
    mp3: "https://phish.in/audio/000/030/812/30812.mp3",
    position: 13,
    set_name: "Set 2",
    show_id: 1852,
    title: "Tweezer",
    song_ids: 803
  },
  {
    id: 30813,
    mp3: "https://phish.in/audio/000/030/813/30813.mp3",
    position: 14,
    set_name: "Set 2",
    show_id: 1852,
    title: "Fluffhead",
    song_ids: 264
  },
  {
    id: 30814,
    mp3: "https://phish.in/audio/000/030/814/30814.mp3",
    position: 15,
    set_name: "Set 2",
    show_id: 1852,
    title: "Piper",
    song_ids: 593
  },
  {
    id: 30815,
    mp3: "https://phish.in/audio/000/030/815/30815.mp3",
    position: 16,
    set_name: "Set 2",
    show_id: 1852,
    title: "Steam",
    song_ids: 730
  },
  {
    id: 30816,
    mp3: "https://phish.in/audio/000/030/816/30816.mp3",
    position: 17,
    set_name: "Set 2",
    show_id: 1852,
    title: "Wading in the Velvet Sea",
    song_ids: 821
  },
  {
    id: 30817,
    mp3: "https://phish.in/audio/000/030/817/30817.mp3",
    position: 18,
    set_name: "Set 2",
    show_id: 1852,
    title: "Harry Hood",
    song_ids: 330
  },
  {
    id: 30818,
    mp3: "https://phish.in/audio/000/030/818/30818.mp3",
    position: 19,
    set_name: "Set 2",
    show_id: 1852,
    title: "Tweezer Reprise",
    song_ids: 804
  },
  {
    id: 30819,
    mp3: "https://phish.in/audio/000/030/819/30819.mp3",
    position: 20,
    set_name: "Encore",
    show_id: 1852,
    title: "I Am the Walrus",
    song_ids: 362
  }
];

module.exports = {
  mockSong,
  mockVenue,
  mockMember,
  mockYears,
  mockTours,
  mockUserShows,
  mockSetList
};
