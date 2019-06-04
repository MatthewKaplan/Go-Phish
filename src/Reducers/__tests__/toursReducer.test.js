import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import toursReducer from "../toursReducer";

const tours = MockData.mockTours;

describe("toursReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = toursReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of tours", () => {
    const expected = tours;
    const result = toursReducer(undefined, actions.allTours(tours));

    expect(result).toEqual(expected);
  });
});