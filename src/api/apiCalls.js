import { bearer } from "./apiKey";
const url = "https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/";

const fetchData = path => {
  return fetch(url + path, {
    method: "GET",
    headers: {
      Authorization: bearer,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    } else {
      return response.json();
    }
  });
};

const fetchMembers = path => {
  return fetch(path).then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch Band Data");
    } else {
      return response.json();
    }
  });
};

export { fetchData, fetchMembers };
