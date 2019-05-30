import { bearer } from "./apiKey";

const fetchData = url => {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: bearer,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error("Fetch failed");
    } else {
      return response.json();
    }
  });
};

const fetchMembers = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error("Fetch failed");
    } else {
      return response.json();
    }
  });
};

export { fetchData, fetchMembers };
