import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import { MainPage, mapStateToProps, mapDispatchToProps } from "./MainPage";
import {
  cleanVenues,
  cleanSongs,
  cleanRandomShow
} from "../../Helpers/cleaners";

jest.mock("../../api/apiCalls.js");
jest.mock("../../Helpers/cleaners.js");

const mockYears = MockData.mockYears;
const mockTours = MockData.mockTours;
const mockSongs = MockData.mockSong;
const mockVenues = MockData.mockVenues;
const mockShows = MockData.mockShow;
const mockIsLoading = false;
const mockLocation = jest.fn();
const mockAllSongs = jest.fn();
const mockUpcomingShows = jest.fn();
const mockCleanSongs = jest.fn();
const mockLoadingData = jest.fn();
const mockCleanVenues = jest.fn();
const mockAllVenues = jest.fn();
const mockCleanRandomShow = jest.fn();
const mockRandomShow = jest.fn();

describe("MainPage", () => {
  let wrapper, instance;

  fetchData.mockImplementation(() => Promise.resolve(1));
  fetchMembers.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <MainPage
        loadingData={mockLocation}
        location={mockLocation}
        years={mockYears}
        tours={mockTours}
        songs={mockSongs}
        venues={mockVenues}
        shows={mockShows}
        isLoading={mockIsLoading}
        upcomingShows={mockUpcomingShows}
        cleanSongs={mockCleanSongs}
        cleanVenues={mockCleanVenues}
        allSongs={mockAllSongs}
        loadingData={mockLoadingData}
        allVenues={mockAllVenues}
        cleanRandomShow={mockCleanRandomShow}
        randomShow={mockRandomShow}
      />
    );
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchData.mockClear();
    fetchMembers.mockClear();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      randomShowFetching: true
    });
  });

  it("should invoke 'fetchSongs, fetchVenues, fetchRandomShow, fetchUpcomingShows' when mounted", () => {
    jest.spyOn(instance, "fetchSongs");
    jest.spyOn(instance, "fetchVenues");
    jest.spyOn(instance, "fetchRandomShow");
    jest.spyOn(instance, "fetchUpcomingShows");
    instance.componentDidMount();
    expect(instance.fetchSongs).toHaveBeenCalled();
    expect(instance.fetchVenues).toHaveBeenCalled();
    expect(instance.fetchRandomShow).toHaveBeenCalled();
    expect(instance.fetchUpcomingShows).toHaveBeenCalled();
  });

  describe("fetchUpcomingShows", () => {
    it("should call 'fetchMembers' with correct params when fetchUpcomingShows is invoked", () => {
      instance.fetchUpcomingShows();
      expect(fetchMembers).toHaveBeenCalledWith(
        "https://cors-anywhere.herokuapp.com/https://mighty-mountain-16368.herokuapp.com/api/v1/phishTour"
      );
    });

    it("should invoke 'upcomingShows' with the response from 'fetchMembers'", () => {
      instance.fetchUpcomingShows();
      expect(fetchMembers).toHaveBeenCalledWith(
        "https://cors-anywhere.herokuapp.com/https://mighty-mountain-16368.herokuapp.com/api/v1/phishTour"
      );
      expect(mockUpcomingShows).toHaveBeenCalledWith(1);
    });

    it("should throw an error if the response is not ok", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: false
        })
      );

      try {
        await fetchMembers("wwww.mockLink.com");
      } catch (error) {
        expect(error.message).toBe("Failed to fetch data");
      }
    });
  });

  describe("fetchRandomShow", () => {
    it("should invoke 'loadingData' with the correct params", () => {
      instance.fetchRandomShow();
      expect(mockLoadingData).toHaveBeenCalledWith(true);
    });

    it("should set the state of 'randomShowFetching' to be true", () => {
      wrapper.setState({ randomShowFetching: false });
      expect(wrapper.state().randomShowFetching).toEqual(false);
      instance.fetchRandomShow();
      expect(wrapper.state().randomShowFetching).toEqual(true);
    });

    it("should invoke 'fetchData' with the correct param", () => {
      instance.fetchRandomShow();
      expect(fetchData).toHaveBeenCalledWith("random-show");
    });

    it("should clean the response of 'fetchRandomData' when invoked", () => {
      cleanRandomShow.mockImplementation(() => Promise.resolve(1));
      instance.fetchRandomShow();
      expect(cleanRandomShow).toHaveBeenCalled();
    });

    it("should set the state in redux with cleaned results", () => {
      instance.fetchRandomShow();
      expect(mockRandomShow).toHaveBeenCalled();
    });

    it("should set the state of 'randomShowFetching' back to false after everything is finished", () => {
      expect(wrapper.state().randomShowFetching).toEqual(true);
      instance.fetchRandomShow();
      expect(mockRandomShow).toHaveBeenCalled() &&
        expect(wrapper.state().randomShowFetching).toEqual(false);
    });

    it("should finally throw an error if the response is not ok", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: false
        })
      );

      try {
        await fetchData("wwww.mockLink.com");
      } catch (error) {
        expect(error.message).toBe("Failed to fetch data");
      }
    });
  });

  describe("fetchSongs", () => {
    it("should call 'fetchData' with correct params when fetchSongs is invoked", () => {
      instance.fetchSongs();
      expect(fetchData).toHaveBeenCalledWith("random-show");
    });

    it("should clean the response of 'fetchSongs' when invoked", async () => {
      cleanSongs.mockImplementation(() => Promise.resolve(1));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
    });

    it("should invoke 'allSongs' with the results from 'cleanSongs'", () => {
      cleanSongs.mockImplementation(() => Promise.resolve(1));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
      expect(mockAllSongs).toHaveBeenCalled();
    });

    it("should invoke 'loadingData' with the correct params", () => {
      cleanSongs.mockImplementation(() => Promise.resolve(1));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
      expect(mockAllSongs).toHaveBeenCalled() &&
        expect(mockLoadingData).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: false
        })
      );

      try {
        await fetchMembers("wwww.mockLink.com");
      } catch (error) {
        expect(error.message).toBe("Failed to fetch data");
      }
    });
  });

  describe("fetchVenues", () => {
    it("should call 'fetchData' with correct params when fetchVenues is invoked", () => {
      instance.fetchVenues();
      expect(fetchData).toHaveBeenCalledWith("venues.json?per_page=651");
    });

    it("should clean the response of 'fetchVenues' when invoked", async () => {
      cleanVenues.mockImplementation(() => Promise.resolve(1));
      instance.fetchVenues();
      expect(cleanVenues).toHaveBeenCalled();
    });

    it("should invoke 'allVenues' with results from 'cleanVenues'", () => {
      cleanVenues.mockImplementation(() => Promise.resolve(1));
      instance.fetchVenues();
      expect(cleanSongs).toHaveBeenCalled();
      expect(mockAllVenues).toHaveBeenCalled();
    });

    it("should throw an error if the response is not ok", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: false
        })
      );

      try {
        await fetchData("wwww.mockLink.com");
      } catch (error) {
        expect(error.message).toBe("Failed to fetch data");
      }
    });
  });

  describe("componentToRender", () => {
    it("should render 'Years' components when '/Years' is passed through", () => {
      const results = instance.componentToRender("/Years");
      expect(results).toHaveLength(1);
    });
    it("should render 'Tours' components when '/Tours' is passed through", () => {
      const results = instance.componentToRender("/Tours");
      expect(results).toHaveLength(1);
    });
    it("should render 'Songs' components when '/Songs' is passed through", () => {
      const results = instance.componentToRender("/Songs");
      expect(results).toHaveLength(1);
    });
    it("should render 'Venues' components when '/Venues' is passed through", () => {
      const results = instance.componentToRender("/Venues");
      expect(results).toHaveLength(2);
    });
    it("should render 'Shows' components when '/Shows' is passed through", () => {
      const results = instance.componentToRender("/Shows");
      expect(results).toHaveLength(1);
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      years: [],
      tours: [],
      venues: [],
      shows: [],
      isLoading: undefined
    };
    const expected = {
      songs: [],
      years: [],
      tours: [],
      venues: [],
      shows: [],
      isLoading: undefined
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for allSongs", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allSongs(mockSongs);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allSongs(mockSongs);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allVenues", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allVenues(mockVenues);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allVenues(mockVenues);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for loadingData", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.loadingData(mockIsLoading);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loadingData(mockIsLoading);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for randomShow", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.randomShow(mockShows);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.randomShow(mockShows);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for upcomingShows", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.upcomingShows(mockShows);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.upcomingShows(mockShows);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for handleError", () => {
    const error = "Mock Error";
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.handleError(error);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleError(error);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
