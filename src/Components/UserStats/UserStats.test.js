import React from "react";
import { shallow } from "enzyme";
import MockData from "../../Helpers/mockData";
import { UserStats, mapStateToProps } from "./UserStats";

const mockUserShows = MockData.mockUserShows;
const mockSongs = MockData.mockSong;
const mockUniqueCities = MockData.mockUniqueCities;
const mockUniqueStates = MockData.mockUniqueStates;
const mockUniqueYears = MockData.mockUniqueYears;
const mockUniqueTours = MockData.mockUniqueTours;
const mockUniqueVenues = MockData.mockUniqueVenues;
const mockUniqueSongs = MockData.mockUniqueSongs;
const mockTotalSongs = MockData.mockTotalSongs;
const mockUniqueCitiesVar = jest.fn();
const mockDisplayStats = jest.fn();

describe("UserStats", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <UserStats
        userShows={mockUserShows}
        songs={mockSongs}
        getStates={mockUniqueCitiesVar}
        displayStats={mockDisplayStats}
      />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      songStats: true,
      showStats: false,
      tourStats: false,
      totalSongs: false,
      unheardSongs: false,
      showLocation: false,
      showVenues: false,
      displayShows: false,
      displayYears: false
    });
  });

  it("should change state of 'displayShows' when Number of shows is clicked", () => {
    wrapper.setState({ showStats: true });
    expect(wrapper.state().displayShows).toEqual(false);
    wrapper.find("[data-test='number-of-shows']").simulate("click");
    expect(wrapper.state().displayShows).toEqual(true);
  });

  it("should change state of 'displayYears' when Years is clicked", () => {
    wrapper.setState({ showStats: true });
    expect(wrapper.state().displayYears).toEqual(false);
    wrapper.find("[data-test='display-years']").simulate("click");
    expect(wrapper.state().displayYears).toEqual(true);
  });

  it("should change state of 'showLocation' when Cities is clicked", () => {
    wrapper.setState({ tourStats: true });
    expect(wrapper.state().showLocation).toEqual(false);
    wrapper.find("[data-test='display-location']").simulate("click");
    expect(wrapper.state().showLocation).toEqual(true);
  });

  it("should change state of 'showVenues' when Venues is clicked", () => {
    wrapper.setState({ tourStats: true });
    expect(wrapper.state().showVenues).toEqual(false);
    wrapper.find("[data-test='display-venues']").simulate("click");
    expect(wrapper.state().showVenues).toEqual(true);
  });

  it("should change state of 'totalSongs' when Total Songs is clicked", () => {
    wrapper.setState({ songStats: true });
    expect(wrapper.state().totalSongs).toEqual(false);
    wrapper.find("[data-test='display-totalSongs']").simulate("click");
    expect(wrapper.state().totalSongs).toEqual(true);
  });

  it("should change state of 'unheardSongs' when Total Songs is clicked", () => {
    wrapper.setState({ songStats: true });
    expect(wrapper.state().unheardSongs).toEqual(false);
    wrapper.find("[data-test='display-unheardSongs']").simulate("click");
    expect(wrapper.state().unheardSongs).toEqual(true);
  });

  describe("displayStats", () => {
    it("should change the state of 'songStats', 'showStats', and 'tourStats' with the given values when invoked", () => {
      expect(wrapper.state().songStats).toEqual(true);
      expect(wrapper.state().showStats).toEqual(false);
      expect(wrapper.state().tourStats).toEqual(false);
      instance.displayStats(false, true, true);
      expect(wrapper.state().songStats).toEqual(false);
      expect(wrapper.state().showStats).toEqual(true);
      expect(wrapper.state().tourStats).toEqual(true);
    });
    it("should invoke 'displayStats' with the correct params when song stats btn is clicked.", () => {
      jest.spyOn(instance, "displayStats");
      wrapper.find("[data-test='song-stats']").simulate("click");
      expect(instance.displayStats).toHaveBeenCalledWith(true, false, false);
    });

    it("should invoke 'displayStats' with the correct params when tour stats btn is clicked.", () => {
      jest.spyOn(instance, "displayStats");
      wrapper.find("[data-test='tour-stats']").simulate("click");
      expect(instance.displayStats).toHaveBeenCalledWith(false, false, true);
    });

    it("should invoke 'displayStats' with the correct params when show stats btn is clicked.", () => {
      jest.spyOn(instance, "displayStats");
      wrapper.find("[data-test='show-stats']").simulate("click");
      expect(instance.displayStats).toHaveBeenCalledWith(false, true, false);
    });
  });

  describe("getCities", () => {
    it("should return an array of unique cities when invoked", () => {
      expect(instance.getCities()).toEqual(mockUniqueCities);
    });
  });

  describe("getStates", () => {
    it("should return an array of unique states when invoked", () => {
      expect(instance.getStates()).toEqual(mockUniqueStates);
    });
  });

  describe("getYears", () => {
    it("should return an array of unique years when invoked", () => {
      expect(instance.getYears()).toEqual(mockUniqueYears);
    });
  });

  describe("getTours", () => {
    it("should return an array of unique tours when invoked", () => {
      expect(instance.getTours()).toEqual(mockUniqueTours);
    });
  });

  describe("getVenues", () => {
    it("should return an array of unique venues when invoked", () => {
      expect(instance.getVenues()).toEqual(mockUniqueVenues);
    });
  });

  describe("getSongs", () => {
    it("should return an array of unique venues when invoked", () => {
      expect(instance.getSongs()).toEqual(mockUniqueSongs);
    });
  });

  describe("getTotalSongs", () => {
    it("should return an array of total songs played when invoked", () => {
      expect(instance.getTotalSongs()).toEqual(mockTotalSongs);
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      userShows: []
    };
    const expected = {
      songs: [],
      userShows: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
