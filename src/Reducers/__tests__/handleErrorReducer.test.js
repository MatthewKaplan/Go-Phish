import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import handleErrorReducer from "../handleErrorReducer";

const member = MockData.mockMember;

describe("handleErrorReducer", () => {
  it("should return state on default", () => {
    const expected = "";
    const result = handleErrorReducer(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should return state with an array of current member", () => {
    const expected = member;
    const result = handleErrorReducer(
      undefined,
      actions.handleError(member)
    );

    expect(result).toEqual(expected);
  });
});
