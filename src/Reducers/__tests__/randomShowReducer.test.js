import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import randomShowReducer from "../randomShowReducer";

const show = MockData.mockShow;

describe("randomShowReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = randomShowReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of members", () => {
    const expected = show;
    const result = randomShowReducer(undefined, actions.randomShow(show));

    expect(result).toEqual([expected]);
  });
});