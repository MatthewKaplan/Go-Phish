import React from "react";
import { shallow } from "enzyme";
import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { Years, mapDispatchToProps } from "./Years";
import { fetchData } from "../../api/apiCalls";
import { cleanShows } from "../../Helpers/cleaners";

jest.mock("../../api/apiCalls.js");
jest.mock("../../Helpers/cleaners.js");

const shows = MockData.mockShow;
const mockYear = MockData.mockYears;
const mockLoadingData = jest.fn();
const mockCurrentShows = jest.fn();
const mockHandleError = jest.fn();

describe("Years", () => {
  let wrapper, instance;

  fetchData.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <Years
        year={mockYear}
        loadingData={mockLoadingData}
        currentShows={mockCurrentShows}
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

  describe("handleClick", () => {
    it("should invoke 'handleClick' with the correct params when years btn is clicked", () => {
      jest.spyOn(instance, "handleClick");
      wrapper.find("[data-test='years-btn']").simulate("click");
      expect(instance.handleClick).toHaveBeenCalledWith(mockYear.date);
    });

    it("should invoke 'loadingData' with correct params when invoked", () => {
      instance.handleClick(mockYear.date);
      expect(mockLoadingData).toHaveBeenCalledWith(true);
    });

    it("should invoke 'fetchData' with the correct params when invoked", () => {
      instance.handleClick(mockYear.date);
      expect(fetchData).toHaveBeenCalledWith(`years/${mockYear.date}`);
    });

    it("should clean the response of 'fetchData' when invoked", async () => {
      cleanShows.mockImplementation(() => Promise.resolve(1));
      instance.handleClick(mockYear.date);
      expect(cleanShows).toHaveBeenCalled();
    });

    it("should invoke 'currentShows' with the clean result", () => {
      cleanShows.mockImplementation(() => Promise.resolve(1));
      instance.handleClick(mockYear.date);
      expect(cleanShows).toHaveBeenCalled();
      expect(mockCurrentShows).toHaveBeenCalledWith(1);
    });

    it("should invoke 'loadingData' with correct params", () => {
      cleanShows.mockImplementation(() => Promise.resolve(1));
      instance.handleClick(mockYear.date);
      expect(cleanShows).toHaveBeenCalled();
      expect(mockCurrentShows).toHaveBeenCalledWith(1) &&
        expect(mockLoadingData).toHaveBeenCalledWith(false);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().handleClick();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
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

  it("should call dispatch for loadingData", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.loadingData(false);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.loadingData(false);
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
