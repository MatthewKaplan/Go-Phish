import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { UserStats, mapStateToProps } from "./UserStats";

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      userShows: []
    };
    const expected = {
      songs: [],
      userShows: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
