import React from "react";
import { shallow } from "enzyme";
import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { BandBio, mapDispatchToProps, mapStateToProps } from "./BandBio";

const member = MockData.mockMember;

describe("BandBio", () => {
  let wrapper, instance, mockCurrentMember;

  beforeEach(() => {
    mockCurrentMember = jest.fn()
    wrapper = shallow(<BandBio members={member} member={member} currentMember={mockCurrentMember}/>);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call 'currentMember' when 'closePopup' is invoked", () => {
    instance.closePopup();
    expect(mockCurrentMember).toHaveBeenCalledWith({});
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
