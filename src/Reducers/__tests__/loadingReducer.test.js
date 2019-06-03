import * as actions from "../../Actions/index";
import loadingReducer from "../loadingReducer";

const loading = false;

describe("loadingReducer", () => {
  it("should return state on default", () => {
    const expected = false;
    const result = loadingReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it("should return state with a boolean value", () => {
    const expected = loading;
    const result = loadingReducer(undefined, actions.loadingData(loading));

    expect(result).toEqual(expected);
  });
});