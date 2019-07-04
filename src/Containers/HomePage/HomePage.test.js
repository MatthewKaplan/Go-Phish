import React from "react";
import { shallow } from "enzyme";
import MockData from "../../Helpers/mockData";
import { HomePage, mapStateToProps } from "./HomePage";

const mockShow = MockData.mockShow;
const mockUpcoming = MockData.mockUpcomingShows;

describe("HomePage", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<HomePage show={mockShow} upcoming={mockUpcoming} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      showTour: false
    });
  });

  it("should change the state of showTour when 'toggleTour' is invoked", () => {
    expect(wrapper.state()).toEqual({showTour: false});
    instance.toggleTour();
    expect(wrapper.state()).toEqual({ showTour: true });
  });

  it("should invoke 'toggleTour' with correct params when arrow button is clicked", () => {
    jest.spyOn(instance, "toggleTour");
    wrapper.find("[data-test='arrow-btn']").simulate("click");
    expect(instance.toggleTour).toHaveBeenCalled();
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      show: {},
      upcoming: []
    };
    const expected = {
      show: {},
      upcoming: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
