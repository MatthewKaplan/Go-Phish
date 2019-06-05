import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { Tours, mapDispatchToProps } from "./Tours";

const shows = MockData.mockShow;
const mockTour = MockData.mockSingleTour;
const mockCurrentShows = jest.fn();
const tour = MockData.mockSingleTour;
const mockTourShows = MockData.mockTourShow;

describe("Tours", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <Tours tour={mockTour} currentShows={mockCurrentShows} />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleClick", () => {
    it("should invoke 'currentShows' with the correct params when invoked", () => {
      instance.handleClick(mockTour);
      expect(mockCurrentShows).toHaveBeenCalledWith(mockTourShows);
    });

    it("should invoke 'handleClick' with correct params when tour button is clicked", () => {
      jest.spyOn(instance, "handleClick");
      wrapper.find("[data-test='tour-btn']").simulate("click");
      expect(instance.handleClick).toHaveBeenCalledWith(mockTour);
    });
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for currentShows", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentShows(shows);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentShows(shows);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
