import React from "react";
// import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { MainPage, mapStateToProps, mapDispatchToProps } from "./MainPage";

let song = MockData.mockSong;

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      years: [],
      tours: [],
      venues: [],
      shows: [],
      setList: [],
      isLoading: undefined,
      show: [],
      members: [],
      userShows: []
    };
    const expected = {
      songs: [],
      years: [],
      tours: [],
      venues: [],
      shows: [],
      setList: [],
      isLoading: undefined,
      show: [],
      members: [],
      userShows: []
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
});