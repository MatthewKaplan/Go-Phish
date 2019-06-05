import React from "react";
import UpcomingShows from "./UpcomingShows";
import MockData from "../../Helpers/mockData";
import { shallow } from "enzyme";

const mockShows = MockData.mockUpcoming;

describe("UpcomingShows", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<UpcomingShows shows={mockShows} />);
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<UpcomingShows shows={mockShows} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke 'splitDate when mounted", () => {
    jest.spyOn(instance, "splitDate");
    instance.componentDidMount();
    expect(instance.splitDate).toHaveBeenCalled();
  });
});
