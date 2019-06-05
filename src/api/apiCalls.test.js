import { fetchData, fetchMembers } from "./apiCalls";

describe("fetchData", () => {
  let mockUrl;
  let mockData;
  let mockPath = {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer 47db3d11c8dd5d03ac33a54db9fa07efeb5afd643c581445c15ac5d8e158fce1b96e7d845e8dbecd67c97280185ca938",
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  beforeEach(() => {
    mockUrl =
      "https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/undefined";
    mockData = {
      first: "Matthew",
      last: "Kaplan"
    };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });

  it("calls fetch with the correct params", () => {
    fetchData();
    expect(fetch).toHaveBeenCalledWith(mockUrl, mockPath);
  });

  it("should return the correct data", async () => {
    const result = await fetchData(mockUrl);
    expect(result).toEqual(mockData);
  });

  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );

    try {
      await fetchData(mockUrl);
    } catch (error) {
      expect(error.message).toBe("Fetch failed");
    }
  });
});

describe("fetchMembers", () => {
  let mockUrl;
  let mockData;

  beforeEach(() => {
    mockUrl = "www.someurl.com";
    mockData = {
      first: "Matthew",
      last: "Kaplan"
    };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });

  it("calls fetch with the correct params", () => {
    fetchMembers(mockUrl);
    expect(fetch).toHaveBeenCalledWith(mockUrl);
  });

  it("should return the correct data", async () => {
    const result = await fetchMembers(mockUrl);
    expect(result).toEqual(mockData);
  });

  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );

    try {
      await fetchMembers(mockUrl);
    } catch (error) {
      expect(error.message).toBe("Fetch failed");
    }
  });
});
