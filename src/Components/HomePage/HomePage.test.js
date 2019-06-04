import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { mapStateToProps } from "./HomePage";

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      show: {},
      upcoming: []
    };
    const expected = {
      show: {},
      upcoming: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});