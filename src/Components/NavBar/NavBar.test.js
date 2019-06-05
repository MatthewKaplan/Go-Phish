import React from "react";
import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { shallow } from "enzyme";
import { NavBar, mapDispatchToProps } from "./NavBar";
import { fetchData, fetchMembers } from "../../api/apiCalls";

jest.mock("../../api/apiCalls.js");

const years = MockData.mockYears;
const tours = MockData.mockTours;
const members = MockData.mockMember;
let mockLoadingData = jest.fn();
let mockToggleSubNav = jest.fn();

describe("NavBar", () => {
  let wrapper, instance;

  fetchData.mockImplementation(() => Promise.resolve(1));
  fetchMembers.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <NavBar loadingData={mockLoadingData} toggleSubNav={mockToggleSubNav} />
    );
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchData.mockClear();
    fetchMembers.mockClear();
  });

  it("should match the snapshot with all data passed in", () => {
    wrapper = expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      subNav: false
    });
  });

  it("should change the state of subNav when 'toggleSubNav' is invoked", () => {
    expect(wrapper.state()).toEqual({ subNav: false });
    instance.toggleSubNav(true);
    expect(wrapper.state()).toEqual({ subNav: true });
  });

  it("should invoke 'toggleSubNav' with correct params when logo is clicked", () => {
    jest.spyOn(instance, "toggleSubNav");
    wrapper.find("[data-test='logo-btn']").simulate("click");
    expect(instance.toggleSubNav).toHaveBeenCalledWith(false);
  });

  it("should invoke 'fetchPhishData' with correct params when band navagation tab is clicked", () => {
    jest.spyOn(instance, "fetchPhishData");
    wrapper.find("[data-test='band-btn']").simulate("click");
    expect(instance.fetchPhishData).toHaveBeenCalled();
  });

  it("should invoke 'fetchYears' with correct params when years navagation tab is clicked", () => {
    jest.spyOn(instance, "fetchYears");
    wrapper.find("[data-test='years-btn']").simulate("click");
    expect(instance.fetchYears).toHaveBeenCalled();
  });

  it("should invoke 'toggleSubNav' with correct params when venue navagation tab is clicked", () => {
    jest.spyOn(instance, "toggleSubNav");
    wrapper.find("[data-test='venue-btn']").simulate("click");
    expect(instance.toggleSubNav).toHaveBeenCalledWith(true);
  });

  it("should invoke 'toggleSubNav' with correct params when songs navagation tab is clicked", () => {
    jest.spyOn(instance, "toggleSubNav");
    wrapper.find("[data-test='songs-btn']").simulate("click");
    expect(instance.toggleSubNav).toHaveBeenCalledWith(true);
  });

  it("should invoke 'fetchTours' with correct params when tours navagation tab is clicked", () => {
    jest.spyOn(instance, "fetchTours");
    wrapper.find("[data-test='tours-btn']").simulate("click");
    expect(instance.fetchTours).toHaveBeenCalled();
  });

  describe("fetchYears", () => {
    it("should set the state of subNav to false", () => {
      wrapper.state().subNav = true;
      expect(wrapper.state()).toEqual({ subNav: true });
      instance.fetchYears();
      expect(wrapper.state()).toEqual({ subNav: false });
    });

    it("should invoke 'loadingData' with correct params", () => {
      instance.fetchYears();
      expect(mockLoadingData).toHaveBeenCalledWith(true);
    });

    it("should invoke 'fetchData' with the correct params", () => {
      instance.fetchYears();
      expect(fetchData).toHaveBeenCalledWith("years?include_show_counts=true");
    });
  });

  describe("fetchTours", () => {
    it("should set the state of subNav to false", () => {
      wrapper.state().subNav = true;
      expect(wrapper.state()).toEqual({ subNav: true });
      instance.fetchTours();
      expect(wrapper.state()).toEqual({ subNav: false });
    });

    it("should invoke 'loadingData' with correct params", () => {
      instance.fetchTours();
      expect(mockLoadingData).toHaveBeenCalledWith(true);
    });

    it("should invoke 'fetchData' with the correct params", () => {
      instance.fetchTours();
      expect(fetchData).toHaveBeenCalledWith("tours.json?per_page=99");
    });
  });

  describe("fetchPhishData", () => {
    it("should set the state of subNav to false", () => {
      wrapper.state().subNav = true;
      expect(wrapper.state()).toEqual({ subNav: true });
      instance.fetchPhishData();
      expect(wrapper.state()).toEqual({ subNav: false });
    });

    it("should invoke 'loadingData' with correct params", () => {
      instance.fetchPhishData();
      expect(mockLoadingData).toHaveBeenCalledWith(true);
    });

    it("should invoke 'fetchMembers' with the correct params", () => {
      instance.fetchPhishData();
      expect(fetchMembers).toHaveBeenCalledWith(
        "https://cors-anywhere.herokuapp.com/https://peaceful-castle-66511.herokuapp.com/api/v1/phish/members"
      );
    });
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for allYears", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allYears(years);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allYears(years);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allTours", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allTours(tours);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allTours(tours);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for loadingData", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.loadingData(true);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loadingData(true);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allMembers", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allMembers(members);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allMembers(members);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
