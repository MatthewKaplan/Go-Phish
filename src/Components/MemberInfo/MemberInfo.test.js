import React from "react";
import { MemberInfo } from "./MemberInfo";
import MockData from "../../Helpers/mockData";
import { shallow } from "enzyme";

const member = MockData.mockMember;

describe("MemberInfo", () => {
  let wrapper, instance, mockClosePopup;

  beforeEach(() => {
    mockClosePopup = jest.fn();
    wrapper = shallow(
      <MemberInfo currentMember={member} closePopup={mockClosePopup} />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should invoke 'closePopup' when button is clicked", () => {
    jest.spyOn(instance, "closePopup");
    wrapper.find("[data-test='close-popup']").simulate("click");
    expect(closePopup).toHaveBeenCalled();
  });
});
