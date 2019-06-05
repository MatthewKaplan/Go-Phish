import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { SubNav, mapStateToProps, mapDispatchToProps } from "./SubNav";
import { fetchData } from "../../api/apiCalls";
import { cleanVenues, cleanSongs } from "../../Helpers/cleaners";

jest.mock("../../api/apiCalls.js");
jest.mock("../../Helpers/cleaners.js");

const mockSong = MockData.mockSong;
const mockVenues = MockData.mockVenue;
const mockUncleanVenues = MockData.mockUncleanVenues;
const mockCleanVenues = jest.fn();
const mockAllVenues = jest.fn();
const mockAllSongs = jest.fn();
const mockToggleActiveState = jest.fn();

describe("SubNav", () => {
  let wrapper, instance;
  fetchData.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <SubNav
        songs={mockSong}
        venues={mockVenues}
        cleanVenues={mockCleanVenues}
        allVenues={mockAllVenues}
        allSongs={mockAllSongs}
        toggleActiveState={mockToggleActiveState}
      />
    );
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchData.mockClear();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    wrapper = shallow(
      <SubNav
        songs={mockSong}
        venues={mockVenues}
        cleanVenues={mockCleanVenues}
      />
    );
    expect(wrapper.state()).toEqual({
      venues: [],
      songs: [],
      searchChar: "A"
    });
  });

  it("should invoke 'fetchVenues, fetchSongs' when mounted", () => {
    jest.spyOn(instance, "fetchVenues");
    jest.spyOn(instance, "fetchSongs");
    instance.componentDidMount();
    expect(instance.fetchSongs).toHaveBeenCalled();
    expect(instance.fetchVenues).toHaveBeenCalled();
  });

  describe("fetchVenues", () => {
    it("should invoke 'fetchData' with correct params when 'fetchVenues' is invoked", () => {
      instance.fetchVenues();
      expect(fetchData).toHaveBeenCalledWith("venues.json?per_page=651");
    });

    it("should clean the response of 'fetchVenues' when invoked", async () => {
      cleanVenues.mockImplementation(() => Promise.resolve(mockUncleanVenues));
      instance.fetchVenues();
      expect(cleanVenues).toHaveBeenCalled();
    });

    it("should set the state of 'venues' after data is cleaned", async () => {
      expect(wrapper.state().venues).toEqual(mockUncleanVenues);
    });
  });

  describe("feetchSongs", () => {
    it("should invoke 'fetchData' with correct params when 'fetchSongs' is invoked", () => {
      instance.fetchSongs();
      expect(fetchData).toHaveBeenCalledWith("songs.json?per_page=901");
    });

    it("should clean the response of 'fetchSongs' when invoked", async () => {
      cleanSongs.mockImplementation(() => Promise.resolve(mockSong));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
    });

    it("should set the state of 'venues' after data is cleaned", async () => {
      expect(wrapper.state().songs).toEqual(mockSong);
    });
  });

  describe("toggleActiveState", () => {
    it("should change the state of 'searchChar' to the character passed into it when invoked", () => {
      expect(wrapper.state().searchChar).toEqual("A");
      instance.toggleActiveState("Z");
      expect(wrapper.state().searchChar).toEqual("Z");
    });
  });

  describe("filterVenues", () => {
    it("should invoke 'allVenues' with the correct params when invoked", () => {
      instance.filterVenues("M");
      expect(mockAllVenues).toHaveBeenCalledWith(mockUncleanVenues);
    });
  });

  describe("filterSongs", () => {
    it("should invoke 'allVenues' with the correct params when invoked", () => {
      instance.filterSongs("M");
      expect(mockAllSongs).toHaveBeenCalledWith(mockSong);
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      venues: []
    };
    const expected = {
      songs: [],
      venues: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for allSongs", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allSongs(mockSong);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allSongs(mockSong);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allVenues", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allVenues(mockVenues);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allVenues(mockVenues);
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
