import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import memberReducer from "../memberReducer";

const members = MockData.mockMember;

describe("memberReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = memberReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of members", () => {
    const expected = members;
    const result = memberReducer(undefined, actions.allMembers(members));

    expect(result).toEqual(expected);
  });
});