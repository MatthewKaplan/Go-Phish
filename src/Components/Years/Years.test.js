import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { mapDispatchToProps } from "./Years";

const shows = MockData.mockShow;

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
});
