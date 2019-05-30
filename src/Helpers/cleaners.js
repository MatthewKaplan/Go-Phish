const cleanSongs = data => {
  const songInfo = data.map(song => {
    return {
      id: song.id,
      slug: song.slug,
      title: song.title
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

export { cleanSongs, cleanVenues, cleanTours };
