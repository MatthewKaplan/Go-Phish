import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import upcomingShowsReducer from "../upcomingShowsReducer";

const shows = MockData.mockShow;

describe("upcomingShowsReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = upcomingShowsReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of tours", () => {
    const expected = shows;
    const result = upcomingShowsReducer(undefined, actions.upcomingShows(shows));

    expect(result).toEqual(expected);
  });
});