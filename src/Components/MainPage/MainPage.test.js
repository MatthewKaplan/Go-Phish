import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import { MainPage, mapStateToProps, mapDispatchToProps } from "./MainPage";

jest.mock("../../api/apiCalls.js");

let mockYears = MockData.mockYears;
let mockTours = MockData.mockTours;
let mockSongs = MockData.mockSong;
let mockVenues = MockData.mockVenue;
let mockShows = MockData.mockShow;
let mockIsLoading = false;
let mockLocation = jest.fn();

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
        // currentPath="/"
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

  it("should call 'fetchMembers' with correct params when fetchUpcomingShows is invoked", () => {
    instance.fetchUpcomingShows();
    expect(fetchMembers).toHaveBeenCalledWith(
      "https://cors-anywhere.herokuapp.com/https://mighty-mountain-16368.herokuapp.com/api/v1/phishTour"
    );
  });

  it("should call 'fetchData' with correct params when fetchSongs is invoked", () => {
    instance.fetchSongs();
    expect(fetchData).toHaveBeenCalledWith("random-show");
  });

  it("should call 'fetchData' with correct params when fetchVenues is invoked", () => {
    instance.fetchVenues();
    expect(fetchData).toHaveBeenCalledWith("venues.json?per_page=651");
  });

  it("should render the correct component when the path is equal to that component", () => {});
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
