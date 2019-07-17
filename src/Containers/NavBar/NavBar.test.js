import React from "react";
import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { shallow } from "enzyme";
import { NavBar, mapDispatchToProps, mapStateToProps } from "./NavBar";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import { cleanTours, cleanSongs, cleanVenues } from "../../Helpers/cleaners";

jest.mock("../../api/apiCalls.js");
jest.mock("../../Helpers/cleaners.js");

const years = MockData.mockYears;
const tours = MockData.mockTours;
const members = MockData.mockMember;
const mockHandleError = jest.fn();
const mockAllYears = jest.fn();
const mockAllTours = jest.fn();
const mockAllMembers = jest.fn();
const mockAllVenues = jest.fn();
const mockAllSongs = jest.fn();
let mockLoadingData = jest.fn();
let mockToggleSubNav = jest.fn();

describe("NavBar", () => {
  let wrapper, instance;

  fetchData.mockImplementation(() => Promise.resolve(1));
  fetchMembers.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <NavBar
        loadingData={mockLoadingData}
        allYears={mockAllYears}
        allTours={mockAllTours}
        allVenues={mockAllVenues}
        allSongs={mockAllSongs}
        toggleSubNav={mockToggleSubNav}
        years={[]}
        tours={[]}
        members={[]}
        songs={[]}
        venues={[]}
        handleError={mockHandleError}
        allMembers={mockAllMembers}
      />
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

    it("should invoke 'allYears' with the results from 'fetchData'", () => {
      instance.fetchYears();
      expect(mockAllYears).toHaveBeenCalled();
    });

    it("should invoke 'loadingData' with correct params", () => {
      instance.fetchYears();
      expect(mockLoadingData).toHaveBeenCalledWith(false);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().fetchYears();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
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

    it("should invoke 'cleanTours' with results from 'fetchData'", () => {
      cleanTours.mockImplementation(() => Promise.resolve(1));
      instance.fetchTours();
      expect(cleanTours).toHaveBeenCalled();
    });

    it("should invoke 'allTours' with the results from 'cleanTours'", () => {
      instance.fetchTours();
      expect(mockAllTours).toHaveBeenCalled();
    });

    it("should invoke 'loadingData' with correct params", () => {
      instance.fetchTours();
      expect(mockLoadingData).toHaveBeenCalledWith(false);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().fetchTours();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });
  
  describe("fetchSongs", () => {
    it("should call 'fetchData' with correct params when fetchSongs is invoked", () => {
      instance.fetchSongs();
      expect(fetchData).toHaveBeenCalledWith("songs.json?per_page=901");
    });

    it("should clean the response of 'fetchSongs' when invoked", async () => {
      cleanSongs.mockImplementation(() => Promise.resolve(1));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
    });

    it("should invoke 'allSongs' with the results from 'cleanSongs'", () => {
      cleanSongs.mockImplementation(() => Promise.resolve(1));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
      expect(mockAllSongs).toHaveBeenCalled();
    });

    it("should invoke 'loadingData' with the correct params", () => {
      cleanSongs.mockImplementation(() => Promise.resolve(1));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
      expect(mockAllSongs).toHaveBeenCalled() &&
        expect(mockLoadingData).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchSongs();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("fetchVenues", () => {
    it("should call 'fetchData' with correct params when fetchVenues is invoked", () => {
      instance.fetchVenues();
      expect(fetchData).toHaveBeenCalledWith("venues.json?per_page=651");
    });

    it("should clean the response of 'fetchVenues' when invoked", async () => {
      cleanVenues.mockImplementation(() => Promise.resolve(1));
      instance.fetchVenues();
      expect(cleanVenues).toHaveBeenCalled();
    });

    it("should invoke 'allVenues' with results from 'cleanVenues'", () => {
      cleanVenues.mockImplementation(() => Promise.resolve(1));
      instance.fetchVenues();
      expect(cleanSongs).toHaveBeenCalled();
      expect(mockAllVenues).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchVenues();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
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

    it("should invoke 'allMembers' with the results from 'fetchMembers'", () => {
      instance.fetchPhishData();
      expect(mockAllMembers).toHaveBeenCalled();
    });

    it("should invoke 'loadingData' with the correct params", () => {
      instance.fetchPhishData();
      expect(mockLoadingData).toHaveBeenCalledWith(false);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchMembers.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().fetchPhishData();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });
});

describe("fetches when redux store is already full", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <NavBar
        loadingData={mockLoadingData}
        allYears={mockAllYears}
        allTours={mockAllTours}
        toggleSubNav={mockToggleSubNav}
        years={years}
        tours={tours}
        members={members}
        handleError={mockHandleError}
        allMembers={mockAllMembers}
        venues={MockData.mockVenues}
        songs={MockData.mockSong}
      />
    );
    instance = wrapper.instance();
  });

  describe("fetchYears with full redux", () => {
    it("shouldn't invoke 'fetchMembers' while the redux store already has 'years' saved", () => {
      const result = instance.fetchYears();
      expect(result).toMatchObject({});
    });
  });

  describe("fetchPhishData with full redux", () => {
    it("shouldn't invoke 'fetchData' while the redux store already has 'members' saved", () => {
      const result = instance.fetchPhishData();
      expect(result).toMatchObject({});
    });
  });

  describe("fetchTours with full redux", () => {
    it("shouldn't invoke 'fetchData' while the redux store already has 'tours' saved", () => {
      const result = instance.fetchTours();
      expect(result).toMatchObject({});
    });
  });

  describe('fetchVenues with full redux', () => {
		it("shouldn't invoke 'fetchData' while the redux store already has 'upcoming' saved", () => {
			const result = instance.fetchVenues();
			expect(result).toMatchObject({});
		});
  });
  
  describe('fetchSongs with full redux', () => {
		it("shouldn't invoke 'fetchData' while the redux store already has 'upcoming' saved", () => {
			const result = instance.fetchSongs();
			expect(result).toMatchObject({});
		});
	});
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      years: [],
      tours: [],
      members: []
    };
    const expected = {
      years: [],
      tours: [],
      members: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
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

  it("should call dispatch for handleError", () => {
    const error = "Mock Error";
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.handleError(error);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleError(error);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allSongs", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allSongs(MockData.mockSong);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allSongs(MockData.mockSong);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allVenues", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allVenues(MockData.mockVenues);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allVenues(MockData.mockVenues);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
