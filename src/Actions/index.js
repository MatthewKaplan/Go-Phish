export const allMembers = members => ({
  type: "ALL_MEMBERS",
  members
});

export const currentMember = member => ({
  type: "CURRENT_MEMBER",
  member
});

export const allYears = years => ({
  type: "ALL_YEARS",
  years
});

export const allTours = tours => ({
  type: "ALL_TOURS",
  tours
});

export const allSongs = songs => ({
  type: "ALL_SONGS",
  songs
});

export const allVenues = venues => ({
  type: "ALL_VENUES",
  venues
});

export const currentShows = shows => ({
  type: "CURRENT_SHOWS",
  shows
});

export const currentSetList = setlist => ({
  type: "CURRENT_SETLIST",
  setlist
});

export const loadingData = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const randomShow = show => ({
  type: "RANDOM_SHOW",
  show
});

export const upcomingShows = upcoming => ({
  type: "UPCOMING_SHOWS",
  upcoming
});

export const userShowList = userShows => ({
  type: "USERS_SHOWS",
  userShows
});
