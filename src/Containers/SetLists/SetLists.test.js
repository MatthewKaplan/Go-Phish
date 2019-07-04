import React from "react";
import { shallow } from "enzyme";
import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { SetLists, mapStateToProps } from "./SetLists";

const mockSetList = MockData.mockSetList;

describe("SetLists", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<SetLists setList={mockSetList} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

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
