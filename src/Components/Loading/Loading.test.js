import React from "react";
import { Loading } from "./Loading";
import { shallow } from "enzyme";

describe("Loading", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Loading data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
