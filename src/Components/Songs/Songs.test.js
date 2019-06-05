import React from "react";
import { Songs } from "./Songs";
import MockData from "../../Helpers/mockData";
import { shallow } from "enzyme";

const mockSong = MockData.mockSong;

describe("Songs", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Songs song={mockSong} />);
    expect(wrapper).toMatchSnapshot();
  });
});
