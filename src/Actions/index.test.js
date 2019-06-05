import * as actions from "./index";
import MockData from "../Helpers/mockData";

describe("actions", () => {
  it("should return a type of ALL_SONGS", () => {
    const songs = MockData.mockSong;
    const expected = {
      type: "ALL_SONGS",
      songs
    };

    const result = actions.allSongs(songs);
    expect(result).toEqual(expected);
  });

  it("should return a type of ALL_MEMBERS", () => {
    const members = MockData.mockMember;
    const expected = {
      type: "ALL_MEMBERS",
      members
    };

    const result = actions.allMembers(members);
    expect(result).toEqual(expected);
  });

  it("should return a type of CURRENT_MEMBER", () => {
    const member = MockData.mockMember;
    const expected = {
      type: "CURRENT_MEMBER",
      member
    };

    const result = actions.currentMember(member);
    expect(result).toEqual(expected);
  });

  it("should return a type of ALL_YEARS", () => {
    const years = MockData.mockYears;
    const expected = {
      type: "ALL_YEARS",
      years
    };

    const result = actions.allYears(years);
    expect(result).toEqual(expected);
  });

  it("should return a type of ALL_TOURS", () => {
    const tours = MockData.mockTours;
    const expected = {
      type: "ALL_TOURS",
      tours
    };

    const result = actions.allTours(tours);
    expect(result).toEqual(expected);
  });

  it("should return a type of ALL_VENUES", () => {
    const venues = MockData.mockVenues;
    const expected = {
      type: "ALL_VENUES",
      venues
    };

    const result = actions.allVenues(venues);
    expect(result).toEqual(expected);
  });

  it("should return a type of CURRENT_SHOWS", () => {
    const shows = MockData.mockShows;
    const expected = {
      type: "CURRENT_SHOWS",
      shows
    };

    const result = actions.currentShows(shows);
    expect(result).toEqual(expected);
  });

  it("should return a type of CURRENT_SETLIST", () => {
    const setlist = MockData.mockSetlist;
    const expected = {
      type: "CURRENT_SETLIST",
      setlist
    };

    const result = actions.currentSetList(setlist);
    expect(result).toEqual(expected);
  });

  it("should return a type of LOADING", () => {
    const isLoading = true;
    const expected = {
      type: "LOADING",
      isLoading
    };

    const result = actions.loadingData(isLoading);
    expect(result).toEqual(expected);
  });

  it("should return a type of RANDOM_SHOW", () => {
    const show = MockData.mockShow;
    const expected = {
      type: "RANDOM_SHOW",
      show
    };

    const result = actions.randomShow(show);
    expect(result).toEqual(expected);
  });

  it("should return a type of UPCOMING_SHOWS", () => {
    const upcoming = MockData.mockShow;
    const expected = {
      type: "UPCOMING_SHOWS",
      upcoming
    };

    const result = actions.upcomingShows(upcoming);
    expect(result).toEqual(expected);
  });

  it("should return a type of USERS_SHOWS", () => {
    const userShows = MockData.mockShow;
    const expected = {
      type: "USERS_SHOWS",
      userShows
    };

    const result = actions.userShowList(userShows);
    expect(result).toEqual(expected);
  });
});
