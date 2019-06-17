import React from "react";
import { shallow } from "enzyme";
import * as actions from "../../Actions/index";
import MockData from "../../Helpers/mockData";
import { Shows, mapStateToProps, mapDispatchToProps } from "./Shows";

const userList = MockData.mockUserShows;
const setList = MockData.mockSetList;
const mockShow = MockData.mockShow;
const mockSingleShow = MockData.mockSingleShow;
let mockCurrentSetList = jest.fn();
let mockUserShowList = jest.fn();
const show = MockData.mockSingleShow;
const mockSaved = true;
const mockShowId = true;

describe("Shows", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <Shows
        userShows={userList}
        show={mockSingleShow}
        currentSetList={mockCurrentSetList}
        userShowList={mockUserShowList}
        shows={mockSingleShow}
        saved={mockSaved}
        showId={mockShowId}
      />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      inList: false
    });
  });

  it("should invoke 'checkIfSaved' when mounted", () => {
    jest.spyOn(instance, "checkIfSaved");
    instance.componentDidMount();
    expect(instance.checkIfSaved).toHaveBeenCalled();
  });

  describe("handleClick", () => {
    it("should invoke 'currentSetList' with correct params when invoked", () => {
      instance.handleClick(mockShow);
      expect(mockCurrentSetList).toHaveBeenCalled();
    });

    it("should invoke 'handleClick' with correct show when show button is clicked", () => {
      jest.spyOn(instance, "handleClick");
      wrapper.find("[data-test='show-btn']").simulate("click");
      expect(instance.handleClick).toHaveBeenCalledWith(mockSingleShow);
    });
  });

  describe("addToList", () => {
    it("should change state of 'inList' when invoked", () => {
      expect(wrapper.state()).toEqual({ inList: false });
      instance.addToList();
      expect(wrapper.state()).toEqual({ inList: true });
    });
  });
});

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
