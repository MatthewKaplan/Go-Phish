import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { Tours, mapDispatchToProps } from "./Tours";

const shows = MockData.mockShow;

describe("mapDispatchToProps", () => {
  it("should call dispatch for currentShows", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentShows(shows);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentShows(shows);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});