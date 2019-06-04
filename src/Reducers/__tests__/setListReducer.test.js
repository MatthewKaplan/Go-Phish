import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import setListReducer from "../setListReducer";

const setList = MockData.mockSetList;

describe("setListReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = setListReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of members", () => {
    const expected = setList;
    const result = setListReducer(undefined, actions.currentSetList(setList));

    expect(result).toEqual(expected);
  });
});