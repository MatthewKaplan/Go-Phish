import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import venuesReducer from "../venuesReducer";

const venues = MockData.mockVenue;

describe("venuesReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = venuesReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of tours", () => {
    const expected = venues;
    const result = venuesReducer(undefined, actions.allVenues(venues));

    expect(result).toEqual(expected);
  });
});