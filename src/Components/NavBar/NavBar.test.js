import MockData from "../../Helpers/mockData";
import * as actions from "../../Actions/index";
import { mapDispatchToProps } from "./NavBar";

const years = MockData.mockYears;
const tours = MockData.mockTours;
const members = MockData.mockMember;

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
