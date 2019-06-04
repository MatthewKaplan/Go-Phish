import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { mapStateToProps } from "./SetLists";

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      setList: []
    };
    const expected = {
      setList: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
