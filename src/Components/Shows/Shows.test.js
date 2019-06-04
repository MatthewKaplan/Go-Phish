import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { Shows, mapStateToProps, mapDispatchToProps } from "./Shows";

const userList = MockData.mockUserShows;
const setList = MockData.mockSetList;

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      userShows: []
    };
    const expected = {
      userShows: []
    };

    
    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for currentSetList", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentSetList(setList);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentSetList(setList);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for userShowList", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.userShowList(userList);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.userShowList(userList);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});