import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { mapDispatchToProps } from "./BandMembers";

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