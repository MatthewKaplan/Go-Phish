import {
  cleanSongs,
  cleanVenues,
  cleanTours,
  cleanShows,
  cleanRandomShow,
  setData
} from "./cleaners";
import MockData from "./mockData";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

const mockSetList = MockData.mockSetList;
const mockName = "Encore";

describe("cleaners", () => {
  describe("cleanSongs", () => {
    it("should take in an array of songs and return a cleaned version of that data", () => {
      const result = cleanSongs(MockData.mockUncleanSongs);
      expect(result).toEqual(MockData.mockCleanedSongs);
    });
  });

  describe("cleanVenues", () => {
    it("should take in an array of venues and return a cleaned version of that data", () => {
      const result = cleanVenues(MockData.mockUncleanVenues);
      expect(result).toEqual(MockData.mockCleanVenues);
    });
  });

  describe("cleanTours", () => {
    it("should take in an array of Tours and return a cleaned version of that data", () => {
      const result = cleanTours(MockData.mockUncleanTours);
      expect(result).toEqual(MockData.mockCleanTours);
    });
  });

  describe("cleanShows", () => {
    it("should take in an array of Shows and return a cleaned version of that data", () => {
      const result = cleanShows(MockData.mockUncleanShow);
      expect(result).toEqual(MockData.mockCleanShow);
    });
  });

  describe("cleanRandomShow", () => {
    it("should take in an object of a random show and return a cleaned version of that data", () => {
      const result = cleanRandomShow(MockData.mockUncleanRandomShow);
      expect(result).toEqual(MockData.mockCleanRandomShow);
    });
  });

  describe("setData", () => {
    it("should take in a setList and name and return a clean version of it", () => {
      const result = setData(MockData.mockSetList, "encore");
      expect(reactElementToJSXString(result)).toEqual(
        `<h1>
  Phish didnt play a/an encore or that data is unavaiable.
</h1>`
      );
    });
  });
});
