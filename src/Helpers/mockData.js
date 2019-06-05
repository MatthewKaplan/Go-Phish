const mockSong = [
  {
    id: 518,
    slug: "the-moma-dance",
    title: "The Moma Dance",
    tracks_count: 158
  }
];

const mockVenue = {
  country: "USA",
  id: 803,
  location: "Bend, OR",
  name: "Les Schwab Amphitheatre",
  show_dates: ["2015-07-21", "2015-07-22", "2012-04-23"],
  show_ids: [1815, 1816],
  shows_count: 2,
  slug: "les-schwab-amphitheatre"
};

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

const mockSingleTour = {
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
};

const mockUserShows = [
  {
    date: "2018-07-17",
    id: 1941,
    tour_id: 103,
    venue_name: "Lake Tahoe Outdoor Arena at Harveys",
    location: "Stateline, NV",
    tracks: [
      {
        id: 32562,
        mp3: "https://phish.in/audio/000/032/562/32562.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1941,
        title: "Free",
        song_ids: 276
      },
      {
        id: 32563,
        mp3: "https://phish.in/audio/000/032/563/32563.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1941,
        title: "Possum",
        song_ids: 595
      },
      {
        id: 32564,
        mp3: "https://phish.in/audio/000/032/564/32564.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1941,
        title: "The Moma Dance",
        song_ids: 518
      },
      {
        id: 32565,
        mp3: "https://phish.in/audio/000/032/565/32565.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1941,
        title: "Ghost",
        song_ids: 292
      },
      {
        id: 32566,
        mp3: "https://phish.in/audio/000/032/566/32566.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1941,
        title: "Funky Bitch",
        song_ids: 285
      },
      {
        id: 32567,
        mp3: "https://phish.in/audio/000/032/567/32567.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1941,
        title: "Stash",
        song_ids: 728
      },
      {
        id: 32568,
        mp3: "https://phish.in/audio/000/032/568/32568.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1941,
        title: "Character Zero",
        song_ids: 147
      },
      {
        id: 32569,
        mp3: "https://phish.in/audio/000/032/569/32569.mp3",
        position: 8,
        set_name: "Set 2",
        show_id: 1941,
        title: "No Men In No Man's Land",
        song_ids: 940
      },
      {
        id: 32570,
        mp3: "https://phish.in/audio/000/032/570/32570.mp3",
        position: 9,
        set_name: "Set 2",
        show_id: 1941,
        title: "Carini",
        song_ids: 135
      },
      {
        id: 32571,
        mp3: "https://phish.in/audio/000/032/571/32571.mp3",
        position: 10,
        set_name: "Set 2",
        show_id: 1941,
        title: "Slave to the Traffic Light",
        song_ids: 693
      },
      {
        id: 32572,
        mp3: "https://phish.in/audio/000/032/572/32572.mp3",
        position: 11,
        set_name: "Set 2",
        show_id: 1941,
        title: "Bouncing Around the Room",
        song_ids: 111
      },
      {
        id: 32573,
        mp3: "https://phish.in/audio/000/032/573/32573.mp3",
        position: 12,
        set_name: "Set 2",
        show_id: 1941,
        title: "Soul Planet",
        song_ids: 1010
      },
      {
        id: 32574,
        mp3: "https://phish.in/audio/000/032/574/32574.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1941,
        title: "Steam",
        song_ids: 730
      },
      {
        id: 32575,
        mp3: "https://phish.in/audio/000/032/575/32575.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1941,
        title: "Harry Hood",
        song_ids: 330
      },
      {
        id: 32576,
        mp3: "https://phish.in/audio/000/032/576/32576.mp3",
        position: 15,
        set_name: "Encore",
        show_id: 1941,
        title: "Contact",
        song_ids: 168
      },
      {
        id: 32577,
        mp3: "https://phish.in/audio/000/032/577/32577.mp3",
        position: 16,
        set_name: "Encore",
        show_id: 1941,
        title: "Julius",
        song_ids: 421
      }
    ],
    venue: {
      id: 370,
      slug: "lake-tahoe-outdoor-arena-at-harveys",
      name: "Lake Tahoe Outdoor Arena at Harveys",
      other_names: [],
      latitude: 38.962408,
      longitude: -119.939903,
      shows_count: 6,
      location: "Stateline, NV",
      updated_at: "2013-10-10T02:53:56Z"
    }
  },
  {
    date: "2018-07-18",
    id: 1942,
    tour_id: 103,
    venue_name: "Lake Tahoe Outdoor Arena at Harveys",
    location: "Stateline, NV",
    tracks: [
      {
        id: 32578,
        mp3: "https://phish.in/audio/000/032/578/32578.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1942,
        title: "AC/DC Bag",
        song_ids: 11
      },
      {
        id: 32579,
        mp3: "https://phish.in/audio/000/032/579/32579.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1942,
        title: "Martian Monster",
        song_ids: 934
      },
      {
        id: 32580,
        mp3: "https://phish.in/audio/000/032/580/32580.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1942,
        title: "Ass Handed",
        song_ids: 957
      },
      {
        id: 32581,
        mp3: "https://phish.in/audio/000/032/581/32581.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1942,
        title: "Everything's Right",
        song_ids: 982
      },
      {
        id: 32582,
        mp3: "https://phish.in/audio/000/032/582/32582.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1942,
        title: "555",
        song_ids: 918
      },
      {
        id: 32583,
        mp3: "https://phish.in/audio/000/032/583/32583.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1942,
        title: "The Wedge",
        song_ids: 835
      },
      {
        id: 32584,
        mp3: "https://phish.in/audio/000/032/584/32584.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1942,
        title: "Lawn Boy",
        song_ids: 435
      },
      {
        id: 32585,
        mp3: "https://phish.in/audio/000/032/585/32585.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1942,
        title: "Back on the Train",
        song_ids: 61
      },
      {
        id: 32586,
        mp3: "https://phish.in/audio/000/032/586/32586.mp3",
        position: 9,
        set_name: "Set 1",
        show_id: 1942,
        title: "Ocelot",
        song_ids: 564
      },
      {
        id: 32587,
        mp3: "https://phish.in/audio/000/032/587/32587.mp3",
        position: 10,
        set_name: "Set 1",
        show_id: 1942,
        title: "My Sweet One",
        song_ids: 540
      },
      {
        id: 32588,
        mp3: "https://phish.in/audio/000/032/588/32588.mp3",
        position: 11,
        set_name: "Set 1",
        show_id: 1942,
        title: "Theme From the Bottom",
        song_ids: 770
      },
      {
        id: 32589,
        mp3: "https://phish.in/audio/000/032/589/32589.mp3",
        position: 12,
        set_name: "Set 1",
        show_id: 1942,
        title: "Bathtub Gin",
        song_ids: 67
      },
      {
        id: 32590,
        mp3: "https://phish.in/audio/000/032/590/32590.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1942,
        title: "Down with Disease",
        song_ids: 225
      },
      {
        id: 32591,
        mp3: "https://phish.in/audio/000/032/591/32591.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1942,
        title: "What's the Use?",
        song_ids: 842
      },
      {
        id: 32592,
        mp3: "https://phish.in/audio/000/032/592/32592.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1942,
        title: "Blaze On",
        song_ids: 939
      },
      {
        id: 32593,
        mp3: "https://phish.in/audio/000/032/593/32593.mp3",
        position: 16,
        set_name: "Set 2",
        show_id: 1942,
        title: "I Always Wanted It This Way",
        song_ids: 963
      },
      {
        id: 32594,
        mp3: "https://phish.in/audio/000/032/594/32594.mp3",
        position: 17,
        set_name: "Set 2",
        show_id: 1942,
        title: "Joy",
        song_ids: 419
      },
      {
        id: 32595,
        mp3: "https://phish.in/audio/000/032/595/32595.mp3",
        position: 18,
        set_name: "Set 2",
        show_id: 1942,
        title: "Limb By Limb",
        song_ids: 449
      },
      {
        id: 32596,
        mp3: "https://phish.in/audio/000/032/596/32596.mp3",
        position: 19,
        set_name: "Set 2",
        show_id: 1942,
        title: "Also Sprach Zarathustra",
        song_ids: 28
      },
      {
        id: 32597,
        mp3: "https://phish.in/audio/000/032/597/32597.mp3",
        position: 20,
        set_name: "Set 2",
        show_id: 1942,
        title: "You Enjoy Myself",
        song_ids: 879
      },
      {
        id: 32598,
        mp3: "https://phish.in/audio/000/032/598/32598.mp3",
        position: 21,
        set_name: "Encore",
        show_id: 1942,
        title: "Suzy Greenberg",
        song_ids: 742
      }
    ],
    venue: {
      id: 370,
      slug: "lake-tahoe-outdoor-arena-at-harveys",
      name: "Lake Tahoe Outdoor Arena at Harveys",
      other_names: [],
      latitude: 38.962408,
      longitude: -119.939903,
      shows_count: 6,
      location: "Stateline, NV",
      updated_at: "2013-10-10T02:53:56Z"
    }
  },
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
    }
  },
  {
    date: "2018-07-21",
    id: 1948,
    tour_id: 103,
    venue_name: "Gorge Amphitheatre",
    location: "George, WA",
    tracks: [
      {
        id: 32689,
        mp3: "https://phish.in/audio/000/032/689/32689.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1948,
        title: "Party Time",
        song_ids: 583
      },
      {
        id: 32690,
        mp3: "https://phish.in/audio/000/032/690/32690.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1948,
        title: "Punch You in the Eye",
        song_ids: 604
      },
      {
        id: 32691,
        mp3: "https://phish.in/audio/000/032/691/32691.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1948,
        title: "Mike's Song",
        song_ids: 505
      },
      {
        id: 32692,
        mp3: "https://phish.in/audio/000/032/692/32692.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1948,
        title: "I Am Hydrogen",
        song_ids: 360
      },
      {
        id: 32693,
        mp3: "https://phish.in/audio/000/032/693/32693.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1948,
        title: "Weekapaug Groove",
        song_ids: 836
      },
      {
        id: 32694,
        mp3: "https://phish.in/audio/000/032/694/32694.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1948,
        title: "Infinite",
        song_ids: 1012
      },
      {
        id: 32695,
        mp3: "https://phish.in/audio/000/032/695/32695.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1948,
        title: "It's Ice",
        song_ids: 408
      },
      {
        id: 32696,
        mp3: "https://phish.in/audio/000/032/696/32696.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1948,
        title: "Divided Sky",
        song_ids: 206
      },
      {
        id: 32697,
        mp3: "https://phish.in/audio/000/032/697/32697.mp3",
        position: 9,
        set_name: "Set 1",
        show_id: 1948,
        title: "Cavern",
        song_ids: 142
      },
      {
        id: 32698,
        mp3: "https://phish.in/audio/000/032/698/32698.mp3",
        position: 10,
        set_name: "Set 2",
        show_id: 1948,
        title: "Tweezer",
        song_ids: 803
      },
      {
        id: 32699,
        mp3: "https://phish.in/audio/000/032/699/32699.mp3",
        position: 11,
        set_name: "Set 2",
        show_id: 1948,
        title: "Golden Age",
        song_ids: 302
      },
      {
        id: 32700,
        mp3: "https://phish.in/audio/000/032/700/32700.mp3",
        position: 12,
        set_name: "Set 2",
        show_id: 1948,
        title: "Farmhouse",
        song_ids: 244
      },
      {
        id: 32701,
        mp3: "https://phish.in/audio/000/032/701/32701.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1948,
        title: "Piper",
        song_ids: 593
      },
      {
        id: 32702,
        mp3: "https://phish.in/audio/000/032/702/32702.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1948,
        title: "Prince Caspian",
        song_ids: 599
      },
      {
        id: 32703,
        mp3: "https://phish.in/audio/000/032/703/32703.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1948,
        title: "Wading in the Velvet Sea",
        song_ids: 821
      },
      {
        id: 32704,
        mp3: "https://phish.in/audio/000/032/704/32704.mp3",
        position: 16,
        set_name: "Set 2",
        show_id: 1948,
        title: "Rise/Come Together",
        song_ids: 165
      },
      {
        id: 32705,
        mp3: "https://phish.in/audio/000/032/705/32705.mp3",
        position: 17,
        set_name: "Set 2",
        show_id: 1948,
        title: "Run Like an Antelope",
        song_ids: 651
      },
      {
        id: 32706,
        mp3: "https://phish.in/audio/000/032/706/32706.mp3",
        position: 18,
        set_name: "Encore",
        show_id: 1948,
        title: "Bug",
        song_ids: 121
      },
      {
        id: 32707,
        mp3: "https://phish.in/audio/000/032/707/32707.mp3",
        position: 19,
        set_name: "Encore",
        show_id: 1948,
        title: "Tweezer Reprise",
        song_ids: 804
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
    }
  },
  {
    date: "2018-07-22",
    id: 1943,
    tour_id: 103,
    venue_name: "Gorge Amphitheatre",
    location: "George, WA",
    tracks: [
      {
        id: 32599,
        mp3: "https://phish.in/audio/000/032/599/32599.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1943,
        title: "The Curtain With",
        song_ids: 184
      },
      {
        id: 32600,
        mp3: "https://phish.in/audio/000/032/600/32600.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1943,
        title: "The Birds",
        song_ids: 933
      },
      {
        id: 32601,
        mp3: "https://phish.in/audio/000/032/601/32601.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1943,
        title: "Birds of a Feather",
        song_ids: 85
      },
      {
        id: 32602,
        mp3: "https://phish.in/audio/000/032/602/32602.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1943,
        title: "Waiting All Night",
        song_ids: 914
      },
      {
        id: 32603,
        mp3: "https://phish.in/audio/000/032/603/32603.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1943,
        title: "Stealing Time From the Faulty Plan",
        song_ids: 729
      },
      {
        id: 32604,
        mp3: "https://phish.in/audio/000/032/604/32604.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1943,
        title: "Reba",
        song_ids: 616
      },
      {
        id: 32605,
        mp3: "https://phish.in/audio/000/032/605/32605.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1943,
        title: "Wombat",
        song_ids: 915
      },
      {
        id: 32606,
        mp3: "https://phish.in/audio/000/032/606/32606.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1943,
        title: "Tela",
        song_ids: 760
      },
      {
        id: 32607,
        mp3: "https://phish.in/audio/000/032/607/32607.mp3",
        position: 9,
        set_name: "Set 1",
        show_id: 1943,
        title: "Walls of the Cave",
        song_ids: 827
      },
      {
        id: 32608,
        mp3: "https://phish.in/audio/000/032/608/32608.mp3",
        position: 10,
        set_name: "Set 2",
        show_id: 1943,
        title: "Crosseyed and Painless",
        song_ids: 178
      },
      {
        id: 32609,
        mp3: "https://phish.in/audio/000/032/609/32609.mp3",
        position: 11,
        set_name: "Set 2",
        show_id: 1943,
        title: "Twist",
        song_ids: 806
      },
      {
        id: 32610,
        mp3: "https://phish.in/audio/000/032/610/32610.mp3",
        position: 12,
        set_name: "Set 2",
        show_id: 1943,
        title: "Waves",
        song_ids: 831
      },
      {
        id: 32611,
        mp3: "https://phish.in/audio/000/032/611/32611.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1943,
        title: "Miss You",
        song_ids: 950
      },
      {
        id: 32612,
        mp3: "https://phish.in/audio/000/032/612/32612.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1943,
        title: "Fluffhead",
        song_ids: 264
      },
      {
        id: 32613,
        mp3: "https://phish.in/audio/000/032/613/32613.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1943,
        title: "Split Open and Melt",
        song_ids: 717
      },
      {
        id: 32614,
        mp3: "https://phish.in/audio/000/032/614/32614.mp3",
        position: 16,
        set_name: "Encore",
        show_id: 1943,
        title: "Wilson",
        song_ids: 864
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
    }
  },
  {
    date: "2018-07-24",
    id: 1944,
    tour_id: 103,
    venue_name: "Bill Graham Civic Auditorium",
    location: "San Francisco, CA",
    tracks: [
      {
        id: 32615,
        mp3: "https://phish.in/audio/000/032/615/32615.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1944,
        title: "46 Days",
        song_ids: 4
      },
      {
        id: 32616,
        mp3: "https://phish.in/audio/000/032/616/32616.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1944,
        title: "McGrupp and the Watchful Hosemasters",
        song_ids: 487
      },
      {
        id: 32617,
        mp3: "https://phish.in/audio/000/032/617/32617.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1944,
        title: "Pigtail",
        song_ids: 592
      },
      {
        id: 32618,
        mp3: "https://phish.in/audio/000/032/618/32618.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1944,
        title: "Cities",
        song_ids: 154
      },
      {
        id: 32619,
        mp3: "https://phish.in/audio/000/032/619/32619.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1944,
        title: "Nellie Kane",
        song_ids: 543
      },
      {
        id: 32620,
        mp3: "https://phish.in/audio/000/032/620/32620.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1944,
        title: "Gumbo",
        song_ids: 316
      },
      {
        id: 32621,
        mp3: "https://phish.in/audio/000/032/621/32621.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1944,
        title: "Guyute",
        song_ids: 318
      },
      {
        id: 32622,
        mp3: "https://phish.in/audio/000/032/622/32622.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1944,
        title: "Axilla",
        song_ids: 53
      },
      {
        id: 32623,
        mp3: "https://phish.in/audio/000/032/623/32623.mp3",
        position: 9,
        set_name: "Set 1",
        show_id: 1944,
        title: "The Dogs",
        song_ids: 926
      },
      {
        id: 32624,
        mp3: "https://phish.in/audio/000/032/624/32624.mp3",
        position: 10,
        set_name: "Set 1",
        show_id: 1944,
        title: "Dirt",
        song_ids: 203
      },
      {
        id: 32625,
        mp3: "https://phish.in/audio/000/032/625/32625.mp3",
        position: 11,
        set_name: "Set 1",
        show_id: 1944,
        title: "David Bowie",
        song_ids: 979
      },
      {
        id: 32626,
        mp3: "https://phish.in/audio/000/032/626/32626.mp3",
        position: 12,
        set_name: "Set 2",
        show_id: 1944,
        title: "The Moma Dance",
        song_ids: 518
      },
      {
        id: 32627,
        mp3: "https://phish.in/audio/000/032/627/32627.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1944,
        title: "A Song I Heard the Ocean Sing",
        song_ids: 10
      },
      {
        id: 32628,
        mp3: "https://phish.in/audio/000/032/628/32628.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1944,
        title: "Mercury",
        song_ids: 945
      },
      {
        id: 32629,
        mp3: "https://phish.in/audio/000/032/629/32629.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1944,
        title: "Carini",
        song_ids: 135
      },
      {
        id: 32630,
        mp3: "https://phish.in/audio/000/032/630/32630.mp3",
        position: 16,
        set_name: "Set 2",
        show_id: 1944,
        title: "Maze",
        song_ids: 486
      },
      {
        id: 32631,
        mp3: "https://phish.in/audio/000/032/631/32631.mp3",
        position: 17,
        set_name: "Set 2",
        show_id: 1944,
        title: "Boogie On Reggae Woman",
        song_ids: 107
      },
      {
        id: 32632,
        mp3: "https://phish.in/audio/000/032/632/32632.mp3",
        position: 18,
        set_name: "Set 2",
        show_id: 1944,
        title: "Harry Hood",
        song_ids: 330
      },
      {
        id: 32633,
        mp3: "https://phish.in/audio/000/032/633/32633.mp3",
        position: 19,
        set_name: "Encore",
        show_id: 1944,
        title: "The Squirming Coil",
        song_ids: 722
      }
    ],
    venue: {
      id: 86,
      slug: "bill-graham-civic-auditorium",
      name: "Bill Graham Civic Auditorium",
      other_names: [],
      latitude: 37.778788,
      longitude: -122.41697,
      shows_count: 14,
      location: "San Francisco, CA",
      updated_at: "2013-10-10T02:53:56Z"
    }
  },
  {
    date: "2018-07-25",
    id: 1950,
    tour_id: 103,
    venue_name: "Bill Graham Civic Auditorium",
    location: "San Francisco, CA",
    tracks: [
      {
        id: 32728,
        mp3: "https://phish.in/audio/000/032/728/32728.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1950,
        title: "Roggae",
        song_ids: 644
      },
      {
        id: 32729,
        mp3: "https://phish.in/audio/000/032/729/32729.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1950,
        title: "Tube",
        song_ids: 797
      },
      {
        id: 32730,
        mp3: "https://phish.in/audio/000/032/730/32730.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1950,
        title: "NICU",
        song_ids: 547
      },
      {
        id: 32731,
        mp3: "https://phish.in/audio/000/032/731/32731.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1950,
        title: "Runaway Jim",
        song_ids: 652
      },
      {
        id: 32732,
        mp3: "https://phish.in/audio/000/032/732/32732.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1950,
        title: "The Horse",
        song_ids: 355
      },
      {
        id: 32733,
        mp3: "https://phish.in/audio/000/032/733/32733.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1950,
        title: "Silent in the Morning",
        song_ids: 687
      },
      {
        id: 32734,
        mp3: "https://phish.in/audio/000/032/734/32734.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1950,
        title: "Keepin' It Real",
        song_ids: 1013
      },
      {
        id: 32735,
        mp3: "https://phish.in/audio/000/032/735/32735.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1950,
        title: "Driver",
        song_ids: 228
      },
      {
        id: 32736,
        mp3: "https://phish.in/audio/000/032/736/32736.mp3",
        position: 9,
        set_name: "Set 1",
        show_id: 1950,
        title: "Saw It Again",
        song_ids: 664
      },
      {
        id: 32737,
        mp3: "https://phish.in/audio/000/032/737/32737.mp3",
        position: 10,
        set_name: "Set 1",
        show_id: 1950,
        title: "Ocelot",
        song_ids: 564
      },
      {
        id: 32738,
        mp3: "https://phish.in/audio/000/032/738/32738.mp3",
        position: 11,
        set_name: "Set 1",
        show_id: 1950,
        title: "Waking Up Dead",
        song_ids: 954
      },
      {
        id: 32739,
        mp3: "https://phish.in/audio/000/032/739/32739.mp3",
        position: 12,
        set_name: "Set 1",
        show_id: 1950,
        title: "Backwards Down the Number Line",
        song_ids: 63
      },
      {
        id: 32740,
        mp3: "https://phish.in/audio/000/032/740/32740.mp3",
        position: 13,
        set_name: "Set 1",
        show_id: 1950,
        title: "More",
        song_ids: 962
      },
      {
        id: 32741,
        mp3: "https://phish.in/audio/000/032/741/32741.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1950,
        title: "Set Your Soul Free",
        song_ids: 1011
      },
      {
        id: 32742,
        mp3: "https://phish.in/audio/000/032/742/32742.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1950,
        title: "Twist",
        song_ids: 806
      },
      {
        id: 32743,
        mp3: "https://phish.in/audio/000/032/743/32743.mp3",
        position: 16,
        set_name: "Set 2",
        show_id: 1950,
        title: "Makisupa Policeman",
        song_ids: 479
      },
      {
        id: 32744,
        mp3: "https://phish.in/audio/000/032/744/32744.mp3",
        position: 17,
        set_name: "Set 2",
        show_id: 1950,
        title: "Scents and Subtle Sounds",
        song_ids: 667
      },
      {
        id: 32745,
        mp3: "https://phish.in/audio/000/032/745/32745.mp3",
        position: 18,
        set_name: "Set 2",
        show_id: 1950,
        title: "What's the Use?",
        song_ids: 842
      },
      {
        id: 32746,
        mp3: "https://phish.in/audio/000/032/746/32746.mp3",
        position: 19,
        set_name: "Set 2",
        show_id: 1950,
        title: "The Wedge",
        song_ids: 835
      },
      {
        id: 32747,
        mp3: "https://phish.in/audio/000/032/747/32747.mp3",
        position: 20,
        set_name: "Set 2",
        show_id: 1950,
        title: "Possum",
        song_ids: 595
      },
      {
        id: 32748,
        mp3: "https://phish.in/audio/000/032/748/32748.mp3",
        position: 21,
        set_name: "Encore",
        show_id: 1950,
        title: "The Lizards",
        song_ids: 458
      }
    ],
    venue: {
      id: 86,
      slug: "bill-graham-civic-auditorium",
      name: "Bill Graham Civic Auditorium",
      other_names: [],
      latitude: 37.778788,
      longitude: -122.41697,
      shows_count: 14,
      location: "San Francisco, CA",
      updated_at: "2013-10-10T02:53:56Z"
    }
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

const mockShow = [
  {
    date: "1998-12-28",
    id: 1724,
    tour_id: 38,
    venue_name: "Madison Square Garden",
    location: "New York, NY",
    tracks: [
      {
        id: 28318,
        mp3: "https://phish.in/audio/000/028/318/28318.mp3",
        position: 1,
        set_name: "Set 1",
        show_id: 1724,
        title: "Axilla",
        song_ids: 53
      },
      {
        id: 28319,
        mp3: "https://phish.in/audio/000/028/319/28319.mp3",
        position: 2,
        set_name: "Set 1",
        show_id: 1724,
        title: "Stash",
        song_ids: 728
      },
      {
        id: 28320,
        mp3: "https://phish.in/audio/000/028/320/28320.mp3",
        position: 3,
        set_name: "Set 1",
        show_id: 1724,
        title: "Farmhouse",
        song_ids: 244
      },
      {
        id: 28321,
        mp3: "https://phish.in/audio/000/028/321/28321.mp3",
        position: 4,
        set_name: "Set 1",
        show_id: 1724,
        title: "Taste",
        song_ids: 757
      },
      {
        id: 28322,
        mp3: "https://phish.in/audio/000/028/322/28322.mp3",
        position: 5,
        set_name: "Set 1",
        show_id: 1724,
        title: "Sleep",
        song_ids: 694
      },
      {
        id: 28323,
        mp3: "https://phish.in/audio/000/028/323/28323.mp3",
        position: 6,
        set_name: "Set 1",
        show_id: 1724,
        title: "Albuquerque",
        song_ids: 20
      },
      {
        id: 28324,
        mp3: "https://phish.in/audio/000/028/324/28324.mp3",
        position: 7,
        set_name: "Set 1",
        show_id: 1724,
        title: "Driver",
        song_ids: 228
      },
      {
        id: 28325,
        mp3: "https://phish.in/audio/000/028/325/28325.mp3",
        position: 8,
        set_name: "Set 1",
        show_id: 1724,
        title: "Tube",
        song_ids: 797
      },
      {
        id: 28326,
        mp3: "https://phish.in/audio/000/028/326/28326.mp3",
        position: 9,
        set_name: "Set 1",
        show_id: 1724,
        title: "Golgi Apparatus",
        song_ids: 304
      },
      {
        id: 28327,
        mp3: "https://phish.in/audio/000/028/327/28327.mp3",
        position: 10,
        set_name: "Set 1",
        show_id: 1724,
        title: "Good Times Bad Times",
        song_ids: 306
      },
      {
        id: 28328,
        mp3: "https://phish.in/audio/000/028/328/28328.mp3",
        position: 11,
        set_name: "Set 2",
        show_id: 1724,
        title: "Carini",
        song_ids: 135
      },
      {
        id: 28329,
        mp3: "https://phish.in/audio/000/028/329/28329.mp3",
        position: 12,
        set_name: "Set 2",
        show_id: 1724,
        title: "Wolfman's Brother",
        song_ids: 870
      },
      {
        id: 28330,
        mp3: "https://phish.in/audio/000/028/330/28330.mp3",
        position: 13,
        set_name: "Set 2",
        show_id: 1724,
        title: "Birds of a Feather",
        song_ids: 85
      },
      {
        id: 28331,
        mp3: "https://phish.in/audio/000/028/331/28331.mp3",
        position: 14,
        set_name: "Set 2",
        show_id: 1724,
        title: "When the Circus Comes",
        song_ids: 845
      },
      {
        id: 28332,
        mp3: "https://phish.in/audio/000/028/332/28332.mp3",
        position: 15,
        set_name: "Set 2",
        show_id: 1724,
        title: "Quinn the Eskimo",
        song_ids: 612
      },
      {
        id: 28333,
        mp3: "https://phish.in/audio/000/028/333/28333.mp3",
        position: 16,
        set_name: "Set 2",
        show_id: 1724,
        title: "David Bowie",
        song_ids: 979
      },
      {
        id: 28334,
        mp3: "https://phish.in/audio/000/028/334/28334.mp3",
        position: 17,
        set_name: "Encore",
        show_id: 1724,
        title: "Been Caught Stealing",
        song_ids: 72
      }
    ],
    venue: {
      id: 408,
      slug: "madison-square-garden",
      name: "Madison Square Garden",
      other_names: [],
      latitude: 40.750505,
      longitude: -73.993439,
      shows_count: 60,
      location: "New York, NY",
      updated_at: "2014-01-26T07:25:53Z"
    },
    showSaved: false
  }
];

const mockUpcoming = {
  id: 1,
  venue_name: "Chaifetz",
  date: "June 11, 2019",
  location: "St. Louis, MO"
};

const mockUpcomingShows = [
  {
    id: 1,
    venue_name: "Chaifetz",
    date: "June 11, 2019",
    location: "St. Louis, MO"
  },
  {
    id: 2,
    venue_name: "Chaifetz",
    date: "June 12, 2019",
    location: "St. Louis, MO"
  },
  {
    id: 3,
    venue_name: "Bonnaroo Arts & Music Festival",
    date: "June 14, 2019",
    location: "Manchester, TN"
  },
  {
    id: 4,
    venue_name: "Bonnaroo Arts & Music Festival",
    date: "June 16, 2019",
    location: "Manchester, TN"
  },
  {
    id: 5,
    venue_name: "Budweiser Stage",
    date: "June 18, 2019",
    location: "Toronto, ON, Canada"
  },
  {
    id: 6,
    venue_name: "Blossom Music Center",
    date: "June 19, 2019",
    location: "Cuyahoga Falls, OH"
  },
  {
    id: 7,
    venue_name: "PNC Music Center",
    date: "June 21, 2019",
    location: "Charlotte, NC"
  },
  {
    id: 8,
    venue_name: "Merriweather Post Pavilion",
    date: "June 22, 2019",
    location: "Columbia, MD"
  },
  {
    id: 9,
    venue_name: "Merriweather Post Pavilion",
    date: "June 23, 2019",
    location: "Columbia, MD"
  },
  {
    id: 10,
    venue_name: "Darling’s Waterfront Pavilion",
    date: "June 25, 2019",
    location: "Bangor, ME"
  },
  {
    id: 11,
    venue_name: "Darling’s Waterfront Pavilion",
    date: "June 26, 2019",
    location: "Bangor, ME"
  },
  {
    id: 12,
    venue_name: "BB&T Pavilion",
    date: "June 28, 2019",
    location: "Camden, NJ"
  },
  {
    id: 13,
    venue_name: "BB&T Pavilion",
    date: "June 29, 2019",
    location: "Camden, NJ"
  },
  {
    id: 14,
    venue_name: "BB&T Pavilion",
    date: "June 30, 2019",
    location: "Camden, NJ"
  },
  {
    id: 15,
    venue_name: "Saratoga Performing Arts Center",
    date: "July 2, 2019",
    location: "Saratoga Springs, NY"
  },
  {
    id: 16,
    venue_name: "Saratoga Performing Arts Center",
    date: "July 3, 2019",
    location: "Saratoga Springs, NY"
  },
  {
    id: 17,
    venue_name: "Fenway Park",
    date: "July 5, 2019",
    location: "Boston, MA"
  },
  {
    id: 18,
    venue_name: "Fenway Park",
    date: "July 6, 2019",
    location: "Boston, MA"
  },
  {
    id: 19,
    venue_name: "Mohegan Sun Arena",
    date: "July 9, 2019",
    location: "Uncasville, CT"
  },
  {
    id: 20,
    venue_name: "Mohegan Sun Arena",
    date: "July 10, 2019",
    location: "Uncasville, CT"
  },
  {
    id: 21,
    venue_name: "Alpine Valley Music Theatre",
    date: "July 12, 2019",
    location: "Elkhorn, WI"
  },
  {
    id: 22,
    venue_name: "Alpine Valley Music Theatre",
    date: "July 13, 2019",
    location: "Elkhorn, WI"
  },
  {
    id: 23,
    venue_name: "Alpine Valley Music Theatre",
    date: "July 14, 2019",
    location: "Elkhorn, WI"
  },
  {
    id: 24,
    venue_name: "Dick's Sporting Goods Park",
    date: "August 30, 2019",
    location: "Commerce City, CO"
  },
  {
    id: 25,
    venue_name: "Dick's Sporting Goods Park",
    date: "August 31, 2019",
    location: "Commerce City, CO"
  },
  {
    id: 26,
    venue_name: "Dick's Sporting Goods Park",
    date: "September 1, 2019",
    location: "Commerce City, CO"
  }
];

const mockSingleShow = {
  date: "1988-02-03",
  id: 369,
  tour_id: 6,
  venue_name: "Gallaghers",
  location: "Waitsfield, VT",
  tracks: [
    {
      id: 7705,
      mp3: "https://phish.in/audio/000/007/705/7705.mp3",
      position: 1,
      set_name: "Set 1",
      show_id: 369,
      title: "David Bowie",
      song_ids: 979
    },
    {
      id: 7706,
      mp3: "https://phish.in/audio/000/007/706/7706.mp3",
      position: 2,
      set_name: "Set 2",
      show_id: 369,
      title: "Sympathy for the Devil",
      song_ids: 751
    },
    {
      id: 7707,
      mp3: "https://phish.in/audio/000/007/707/7707.mp3",
      position: 3,
      set_name: "Set 2",
      show_id: 369,
      title: "Fee",
      song_ids: 248
    },
    {
      id: 7708,
      mp3: "https://phish.in/audio/000/007/708/7708.mp3",
      position: 4,
      set_name: "Set 2",
      show_id: 369,
      title: "Run Like an Antelope",
      song_ids: 651
    },
    {
      id: 7709,
      mp3: "https://phish.in/audio/000/007/709/7709.mp3",
      position: 5,
      set_name: "Set 2",
      show_id: 369,
      title: "AC/DC Bag",
      song_ids: 11
    },
    {
      id: 7710,
      mp3: "https://phish.in/audio/000/007/710/7710.mp3",
      position: 6,
      set_name: "Set 2",
      show_id: 369,
      title: "Possum",
      song_ids: 595
    }
  ],
  venue: {
    id: 272,
    slug: "gallagher-s",
    name: "Gallaghers",
    other_names: [],
    latitude: 44.19599,
    longitude: -72.82602,
    shows_count: 3,
    location: "Waitsfield, VT",
    updated_at: "2013-02-23T22:45:30Z"
  }
};

const mockUncleanVenues = [
  {
    id: 11,
    slug: "the-academy",
    name: "The Academy",
    other_names: [],
    latitude: 40.783515,
    longitude: -73.958766,
    location: "New York, NY",
    city: "New York",
    state: "NY",
    country: "USA",
    shows_count: 1,
    show_dates: ["1991-07-15"],
    show_ids: [472],
    updated_at: "2013-03-24T03:17:31Z"
  },
  {
    id: 13,
    slug: "acker-gym-chico-state-university",
    name: "Acker Gym, Chico State University",
    other_names: [],
    latitude: 39.729881,
    longitude: -121.845221,
    location: "Chico, CA",
    city: "Chico",
    state: "CA",
    country: "USA",
    shows_count: 1,
    show_dates: ["1994-12-04"],
    show_ids: [256],
    updated_at: "2013-03-24T01:16:40Z"
  }
];

const mockTourShow = [
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
];

const mockUniqueCities = ["Stateline, NV", "George, WA", "San Francisco, CA"];

const mockUniqueStates = ["NV", "WA", "CA"];

const mockUniqueYears = ["2018"];

const mockUniqueTours = [103];

const mockUniqueVenues = [
  "Lake Tahoe Outdoor Arena at Harveys",
  "Gorge Amphitheatre",
  "Bill Graham Civic Auditorium"
];

const mockUniqueSongs = [
  "Free",
  "Possum",
  "The Moma Dance",
  "Ghost",
  "Funky Bitch",
  "Stash",
  "Character Zero",
  "No Men In No Man's Land",
  "Carini",
  "Slave to the Traffic Light",
  "Bouncing Around the Room",
  "Soul Planet",
  "Steam",
  "Harry Hood",
  "Contact",
  "Julius",
  "AC/DC Bag",
  "Martian Monster",
  "Ass Handed",
  "Everything's Right",
  "555",
  "The Wedge",
  "Lawn Boy",
  "Back on the Train",
  "Ocelot",
  "My Sweet One",
  "Theme From the Bottom",
  "Bathtub Gin",
  "Down with Disease",
  "What's the Use?",
  "Blaze On",
  "I Always Wanted It This Way",
  "Joy",
  "Limb By Limb",
  "Also Sprach Zarathustra",
  "You Enjoy Myself",
  "Suzy Greenberg",
  "Set Your Soul Free",
  "Wolfman's Brother",
  "Roggae",
  "Poor Heart",
  "Undermind",
  "Simple",
  "Ya Mar",
  "Sand",
  "Chalk Dust Torture",
  "My Friend, My Friend",
  "Fuego",
  "Sparkle",
  "Halley's Comet",
  "Light",
  "Waste",
  "Rock and Roll",
  "Tube",
  "Golgi Apparatus",
  "Party Time",
  "Punch You in the Eye",
  "Mike's Song",
  "I Am Hydrogen",
  "Weekapaug Groove",
  "Infinite",
  "It's Ice",
  "Divided Sky",
  "Cavern",
  "Tweezer",
  "Golden Age",
  "Farmhouse",
  "Piper",
  "Prince Caspian",
  "Wading in the Velvet Sea",
  "Rise/Come Together",
  "Run Like an Antelope",
  "Bug",
  "Tweezer Reprise",
  "The Curtain With",
  "The Birds",
  "Birds of a Feather",
  "Waiting All Night",
  "Stealing Time From the Faulty Plan",
  "Reba",
  "Wombat",
  "Tela",
  "Walls of the Cave",
  "Crosseyed and Painless",
  "Twist",
  "Waves",
  "Miss You",
  "Fluffhead",
  "Split Open and Melt",
  "Wilson",
  "46 Days",
  "McGrupp and the Watchful Hosemasters",
  "Pigtail",
  "Cities",
  "Nellie Kane",
  "Gumbo",
  "Guyute",
  "Axilla",
  "The Dogs",
  "Dirt",
  "David Bowie",
  "A Song I Heard the Ocean Sing",
  "Mercury",
  "Maze",
  "Boogie On Reggae Woman",
  "The Squirming Coil",
  "NICU",
  "Runaway Jim",
  "The Horse",
  "Silent in the Morning",
  "Keepin' It Real",
  "Driver",
  "Saw It Again",
  "Waking Up Dead",
  "Backwards Down the Number Line",
  "More",
  "Makisupa Policeman",
  "Scents and Subtle Sounds",
  "The Lizards"
];

const mockTotalSongs = [
  "Free",
  "Possum",
  "The Moma Dance",
  "Ghost",
  "Funky Bitch",
  "Stash",
  "Character Zero",
  "No Men In No Man's Land",
  "Carini",
  "Slave to the Traffic Light",
  "Bouncing Around the Room",
  "Soul Planet",
  "Steam",
  "Harry Hood",
  "Contact",
  "Julius",
  "AC/DC Bag",
  "Martian Monster",
  "Ass Handed",
  "Everything's Right",
  "555",
  "The Wedge",
  "Lawn Boy",
  "Back on the Train",
  "Ocelot",
  "My Sweet One",
  "Theme From the Bottom",
  "Bathtub Gin",
  "Down with Disease",
  "What's the Use?",
  "Blaze On",
  "I Always Wanted It This Way",
  "Joy",
  "Limb By Limb",
  "Also Sprach Zarathustra",
  "You Enjoy Myself",
  "Suzy Greenberg",
  "Set Your Soul Free",
  "Wolfman's Brother",
  "Roggae",
  "Poor Heart",
  "Undermind",
  "Simple",
  "Ya Mar",
  "Sand",
  "Chalk Dust Torture",
  "My Friend, My Friend",
  "Fuego",
  "Sparkle",
  "Halley's Comet",
  "Light",
  "Waste",
  "Rock and Roll",
  "Tube",
  "Golgi Apparatus",
  "Party Time",
  "Punch You in the Eye",
  "Mike's Song",
  "I Am Hydrogen",
  "Weekapaug Groove",
  "Infinite",
  "It's Ice",
  "Divided Sky",
  "Cavern",
  "Tweezer",
  "Golden Age",
  "Farmhouse",
  "Piper",
  "Prince Caspian",
  "Wading in the Velvet Sea",
  "Rise/Come Together",
  "Run Like an Antelope",
  "Bug",
  "Tweezer Reprise",
  "The Curtain With",
  "The Birds",
  "Birds of a Feather",
  "Waiting All Night",
  "Stealing Time From the Faulty Plan",
  "Reba",
  "Wombat",
  "Tela",
  "Walls of the Cave",
  "Crosseyed and Painless",
  "Twist",
  "Waves",
  "Miss You",
  "Fluffhead",
  "Split Open and Melt",
  "Wilson",
  "46 Days",
  "McGrupp and the Watchful Hosemasters",
  "Pigtail",
  "Cities",
  "Nellie Kane",
  "Gumbo",
  "Guyute",
  "Axilla",
  "The Dogs",
  "Dirt",
  "David Bowie",
  "The Moma Dance",
  "A Song I Heard the Ocean Sing",
  "Mercury",
  "Carini",
  "Maze",
  "Boogie On Reggae Woman",
  "Harry Hood",
  "The Squirming Coil",
  "Roggae",
  "Tube",
  "NICU",
  "Runaway Jim",
  "The Horse",
  "Silent in the Morning",
  "Keepin' It Real",
  "Driver",
  "Saw It Again",
  "Ocelot",
  "Waking Up Dead",
  "Backwards Down the Number Line",
  "More",
  "Set Your Soul Free",
  "Twist",
  "Makisupa Policeman",
  "Scents and Subtle Sounds",
  "What's the Use?",
  "The Wedge",
  "Possum",
  "The Lizards"
];

const mockSmallerSongTotal = [
  "Free"
];

module.exports = {
  mockSong,
  mockVenue,
  mockMember,
  mockYears,
  mockTours,
  mockUserShows,
  mockSetList,
  mockShow,
  mockUpcoming,
  mockUpcomingShows,
  mockSingleShow,
  mockUncleanVenues,
  mockSingleTour,
  mockTourShow,
  mockUniqueCities,
  mockUniqueStates,
  mockUniqueYears,
  mockUniqueTours,
  mockUniqueVenues,
  mockUniqueSongs,
  mockTotalSongs,
  mockSmallerSongTotal
};
