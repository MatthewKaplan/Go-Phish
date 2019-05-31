import React from "react";

const cleanSongs = data => {
  const songInfo = data.map(song => {
    return {
      id: song.id,
      slug: song.slug,
      title: song.title,
      tracks_count: song.tracks_count
    };
  });
  return songInfo;
};

const cleanVenues = data => {
  const venueInfo = data.map(venue => {
    return {
      country: venue.country,
      id: venue.id,
      location: venue.location,
      name: venue.name,
      show_dates: venue.show_dates,
      show_ids: venue.show_ids,
      shows_count: venue.shows_count,
      slug: venue.slug
    };
  });
  return venueInfo;
};

const cleanTours = data => {
  const tourInfo = data.map(tour => {
    return {
      ends_on: tour.ends_on,
      id: tour.id,
      name: tour.name,
      shows_count: tour.shows_count,
      slug: tour.slug,
      starts_on: tour.starts_on,
      shows: tour.shows.map(show => {
        return {
          date: show.date,
          id: show.id,
          location: show.location,
          tour_id: show.tour_id,
          venue_id: show.venue_id,
          venue_name: show.venue_name
        };
      })
    };
  });
  return tourInfo;
};

const cleanShows = data => {
  const showInfo = data.map(show => {
    return {
      date: show.date,
      id: show.id,
      tour_id: show.tour_id,
      venue_name: show.venue_name,
      location: show.venue.location,
      tracks: show.tracks.map(track => {
        return {
          id: track.id,
          mp3: track.mp3,
          position: track.position,
          set_name: track.set_name,
          show_id: track.show_id,
          title: track.title,
          song_ids: track.song_ids[0]
        };
      }),
      venue: show.venue
    };
  });
  return showInfo;
};

// const cleanTourShows = data => {
//   const showInfo = data.map(show => {
//     return {
//       date: show.date,
//       id: show.id,
//       tour_id: show.tour_id,
//       venue_name: show.venue_name,

//     }
//   })
// }

export { cleanSongs, cleanVenues, cleanTours, cleanShows };
