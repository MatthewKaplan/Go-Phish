import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { mapDispatchToProps, mapStateToProps } from "./BandBio";

const member = MockData.mockMember;


describe("mapDispatchToProps", () => {
  it("should call dispatch for currentMember", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentMember(member);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentMember(member);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      members: [],
      member: {}
    };
    const expected = {
      members: [],
      member: {}
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
