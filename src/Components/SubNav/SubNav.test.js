import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { SubNav, mapStateToProps, mapDispatchToProps } from "./SubNav";

const song = MockData.mockSong;
const venues = MockData.mockVenue;

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
});
