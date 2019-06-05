import React from "react";
import { Venues } from "./Venues";
import MockData from "../../Helpers/mockData";
import { shallow } from "enzyme";

const venueMock = MockData.mockVenue;

describe("Venues", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Venues venue={venueMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
