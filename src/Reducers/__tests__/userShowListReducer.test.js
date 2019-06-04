import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import userShowListReducer from "../userShowListReducer";

const shows = MockData.mockShow;

describe("userShowListReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = userShowListReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of tours", () => {
    const expected = shows;
    const result = userShowListReducer(undefined, actions.userShowList(shows));

    expect(result).toEqual([expected]);
  });
});