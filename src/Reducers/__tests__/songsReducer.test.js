import songsReducer from "../songsReducer";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";

const songs = MockData.mockSong;

describe("songsReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = songsReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of news", () => {
    const expected = songs;
    const result = songsReducer(undefined, actions.allSongs(songs));

    expect(result).toEqual(expected);
  });
});
