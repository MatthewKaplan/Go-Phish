import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import showsReducer from "../showsReducer";

const shows = MockData.mockShow;

describe("showsReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = showsReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of shows", () => {
    const expected = shows;
    const result = showsReducer(undefined, actions.currentShows(shows));

    expect(result).toEqual(expected);
  });
});