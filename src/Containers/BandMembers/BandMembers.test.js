import React from "react";
import { shallow } from "enzyme";
import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { BandMembers, mapDispatchToProps } from "./BandMembers";

const member = MockData.mockMember;
let mockCurrentMember = jest.fn();

describe("BandMembers", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <BandMembers member={member} currentMember={mockCurrentMember} />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke 'getCurrentMember' with correct params when a band member card is clicked", () => {
    jest.spyOn(instance, "getCurrentMember");
    wrapper.find("[data-test='band-member-cards']").simulate("click");
    expect(instance.getCurrentMember).toHaveBeenCalledWith(member);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for currentMember", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentMember(member);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentMember(member);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
