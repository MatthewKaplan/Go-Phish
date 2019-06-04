import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import yearsReducer from "../yearsReducer";

const years = MockData.mockYears;

describe("yearsReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = yearsReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of tours", () => {
    const expected = years;
    const result = yearsReducer(undefined, actions.allYears(years));

    expect(result).toEqual(expected);
  });
});