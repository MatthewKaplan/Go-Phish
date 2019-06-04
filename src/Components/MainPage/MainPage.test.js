import React from "react";
// import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { MainPage, mapStateToProps, mapDispatchToProps } from "./MainPage";

const song = MockData.mockSong;
const venues = MockData.mockVenue;
const show = MockData.mockShow;

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      years: [],
      tours: [],
      venues: [],
      shows: [],
      isLoading: undefined,
    };
    const expected = {
      songs: [],
      years: [],
      tours: [],
      venues: [],
      shows: [],
      isLoading: undefined,
    };

    
    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for allSongs", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allSongs(song);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allSongs(song);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allVenues", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allVenues(venues);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allVenues(venues);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for loadingData", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.loadingData(true);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loadingData(true);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for randomShow", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.randomShow(show);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.randomShow(show);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for upcomingShows", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.upcomingShows(show);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.upcomingShows(show);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});