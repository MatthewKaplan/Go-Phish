import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import currentMemberReducer from "../currentMemberReducer";

const member = MockData.mockMember;

describe("currentMemberReducer", () => {
  it("should return state on default", () => {
    const expected = {};
    const result = currentMemberReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of current member", () => {
    const expected = member;
    const result = currentMemberReducer(undefined, actions.currentMember(member));

    expect(result).toEqual(expected);
  });
});