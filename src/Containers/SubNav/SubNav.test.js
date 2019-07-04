import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { SubNav, mapStateToProps, mapDispatchToProps } from "./SubNav";
import { fetchData } from "../../api/apiCalls";
import { cleanVenues, cleanSongs } from "../../Helpers/cleaners";

jest.mock("../../api/apiCalls.js");
jest.mock("../../Helpers/cleaners.js");

const mockSong = MockData.mockSong;
const mockVenuesResults = MockData.mockVenue;
const mockVenues = MockData.mockVenues;
const mockUncleanVenues = MockData.mockUncleanVenues;
const mockCleanVenues = jest.fn();
const mockAllVenues = jest.fn();
const mockAllSongs = jest.fn();
const mockToggleActiveState = jest.fn();
const mockWhatToFetch = jest.fn();
const mockHandleError = jest.fn();

describe("SubNav", () => {
  let wrapper, instance;
  fetchData.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <SubNav
        songs={mockSong}
        venues={mockVenues}
        cleanVenues={mockCleanVenues}
        allVenues={mockAllVenues}
        allSongs={mockAllSongs}
        toggleActiveState={mockToggleActiveState}
        whatToFetch={mockWhatToFetch}
        venuesResults={mockVenuesResults}
        handleError={mockHandleError}
      />
    );
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchData.mockClear();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    wrapper = shallow(
      <SubNav
        songs={mockSong}
        venues={mockVenues}
        cleanVenues={mockCleanVenues}
      />
    );
    expect(wrapper.state()).toEqual({
      venues: [],
      songs: [],
      searchChar: "A"
    });
  });

  it("should invoke 'fetchVenues, fetchSongs' when mounted", () => {
    jest.spyOn(instance, "fetchVenues");
    jest.spyOn(instance, "fetchSongs");
    instance.componentDidMount();
    expect(instance.fetchSongs).toHaveBeenCalled();
    expect(instance.fetchVenues).toHaveBeenCalled();
  });

  describe("fetchVenues", () => {
    it("should invoke 'fetchData' with correct params when 'fetchVenues' is invoked", () => {
      instance.fetchVenues();
      expect(fetchData).toHaveBeenCalledWith("venues.json?per_page=651");
    });

    it("should clean the response of 'fetchVenues' when invoked", async () => {
      cleanVenues.mockImplementation(() => Promise.resolve(mockUncleanVenues));
      instance.fetchVenues();
      expect(cleanVenues).toHaveBeenCalled();
    });

    it("should set the state of 'venues' after data is cleaned", async () => {
      await instance.fetchVenues();
      expect(wrapper.state().venues).toEqual(mockUncleanVenues);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().fetchVenues();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("fetchSongs", () => {
    it("should invoke 'fetchData' with correct params when 'fetchSongs' is invoked", () => {
      instance.fetchSongs();
      expect(fetchData).toHaveBeenCalledWith("songs.json?per_page=901");
    });

    it("should clean the response of 'fetchSongs' when invoked", async () => {
      cleanSongs.mockImplementation(() => Promise.resolve(mockSong));
      instance.fetchSongs();
      expect(cleanSongs).toHaveBeenCalled();
    });

    it("should set the state of 'songs' after data is cleaned", async () => {
      await instance.fetchSongs();
      expect(wrapper.state().songs).toEqual(mockSong);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().fetchSongs();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("toggleActiveState", () => {
    it("should change the state of 'searchChar' to the character passed into it when invoked", () => {
      expect(wrapper.state().searchChar).toEqual("A");
      instance.toggleActiveState("Z");
      expect(wrapper.state().searchChar).toEqual("Z");
    });
  });

  describe("filterVenues", () => {
    it("should invoke 'allVenues' with the correct params when invoked", () => {
      instance.filterVenues("M");
      expect(mockAllVenues).toHaveBeenCalledWith([]);
    });
  });

  describe("filterSongs", () => {
    it("should invoke 'allSongs' with the correct params when invoked", () => {
      instance.filterSongs("M");
      expect(mockAllSongs).toHaveBeenCalledWith([]);
    });
  });

  describe("whatToFetch", () => {
    it("should invoke 'filterVenues' with the correct params", () => {
      jest.spyOn(instance, "filterVenues");
      instance.whatToFetch("A", "http://localhost:3000/Venues");
      expect(instance.filterVenues).toHaveBeenCalledWith("A")
    })

    it("should invoke 'filterSongs' with the correct params", () => {
      jest.spyOn(instance, "filterSongs");
      instance.whatToFetch("A", "http://localhost:3000/Songs");
      expect(instance.filterSongs).toHaveBeenCalledWith("A")
    })
  })

  describe("Nav Clicks", () => {
    beforeEach(() => {
      jest.spyOn(instance, "whatToFetch");
    });

    it("should invoke 'whatToFetch' with the param 'A' ", () => {
      wrapper.find("[data-test='a-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("A", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'B' ", () => {
      wrapper.find("[data-test='b-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("B", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'C' ", () => {
      wrapper.find("[data-test='c-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("C", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'D' ", () => {
      wrapper.find("[data-test='d-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("D", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'E' ", () => {
      wrapper.find("[data-test='e-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("E", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'F' ", () => {
      wrapper.find("[data-test='f-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("F", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'G' ", () => {
      wrapper.find("[data-test='g-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("G", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'H' ", () => {
      wrapper.find("[data-test='h-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("H", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'I' ", () => {
      wrapper.find("[data-test='i-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("I", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'J' ", () => {
      wrapper.find("[data-test='j-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("J", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'K' ", () => {
      wrapper.find("[data-test='k-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("K", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'L' ", () => {
      wrapper.find("[data-test='l-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("L", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'M' ", () => {
      wrapper.find("[data-test='m-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("M", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'N' ", () => {
      wrapper.find("[data-test='n-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("N", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'O' ", () => {
      wrapper.find("[data-test='o-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("O", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'P' ", () => {
      wrapper.find("[data-test='p-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("P", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'Q' ", () => {
      wrapper.find("[data-test='q-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("Q", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'R' ", () => {
      wrapper.find("[data-test='r-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("R", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'S' ", () => {
      wrapper.find("[data-test='s-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("S", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'T' ", () => {
      wrapper.find("[data-test='t-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("T", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'U' ", () => {
      wrapper.find("[data-test='u-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("U", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'V' ", () => {
      wrapper.find("[data-test='v-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("V", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'W' ", () => {
      wrapper.find("[data-test='w-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("W", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'X' ", () => {
      wrapper.find("[data-test='x-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("X", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'Y' ", () => {
      wrapper.find("[data-test='y-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("Y", window.location.href);
    });

    it("should invoke 'whatToFetch' with the param 'Z' ", () => {
      wrapper.find("[data-test='z-btn']").simulate("click");
      expect(instance.whatToFetch).toHaveBeenCalledWith("Z", window.location.href);
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      songs: [],
      venues: []
    };
    const expected = {
      songs: [],
      venues: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for allSongs", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allSongs(mockSong);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allSongs(mockSong);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for allVenues", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allVenues(mockVenues);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allVenues(mockVenues);
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
});
