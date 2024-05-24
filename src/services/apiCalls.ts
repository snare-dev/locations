import { createPostType, userType } from "@/types";

export const loginUser = async () => {
  const googleUrl = "http//:localhost:8000/api/v1/auth/google";

  try {
    const response = await fetch(googleUrl);

    console.log(response);

    if (!response.ok) {
      throw new Error("User not found, please try again!");
    }

    const user = await response.json();

    console.log(user);


    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const logout = async () => {
  const logoutUrl = "http//:localhost:8000/api/v1/auth/logout";

  try {
    const response = await fetch(logoutUrl);

    if (!response.ok) {
      throw new Error(`Something went wrong, please try again!`);
    }

    const res = response.json();

    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getUserProfile = async (id: string) => {
  const url = `http//:localhost:8080/api/v1/users/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getLocationName = async (id: string) => {
  const url = "http//:localhost:8000/api/v1/locations/";

  try {
    const res = await fetch(`${url}/:${id}`);

    const data = await res.json();

    return data.locationName;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (
  coords: {
    latitude: number | undefined;
    longitude: number | undefined;
    country: string | undefined;
  },
  radius: number
) => {
  const { latitude, longitude } = coords;
  // Use the latitude and longitude to fetch data

  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/locations/?latitude=${latitude}&longitude=${longitude}&radius=${radius}&country={country}`
    );
    if (!res.ok) {
      console.log(res);
      throw new Error(`HTTP error! Status: ${res.status} `);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchUser = async (query: string | undefined) => {
  let url = `http//:localhost:8080/api/v1/users/`;

  if (query) {
    url += `?search=${query}`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Something went wrong, please try again!`);
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  } else {
    return;
  }
};

export const createPost = async (data: createPostType) => {
  const url = `http//:localhost:8000/api/v1/locations/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Something went wrong, please try again!`);
    }

    const postData = await response.json();
    return postData;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteProfile = async (id: string) => {
  const url = `http//:localhost:8080/api/v1/users/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getAddress = async () => {
  let url;
  let longitude;
  let latitude;

  try {
    const watchID = navigator.geolocation.watchPosition((position) => {
      // Use the position coordinates to fetch data
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
    });

    if (!longitude || !latitude) {
      throw new Error(
        "Unable to get location data, please allow location data to share this location!"
      );
    }

    url = `http//:localhost:8080/api/v1/locations/address?latitude=${latitude}&longitude=${longitude}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const address = await response?.json();

    return { address, watchID, latitude, longitude };
  } catch (error) {
    console.error(error);
    return error;
  }
};
