/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";

import { createPostType, userType } from "@/types";

export const loginUser = async () => {
  const googleUrl = "/api/v1/auth/google";

  try {
    const response = await fetch(googleUrl);

    console.log(response);

    if (!response) {
      throw new Error("User not found, please try again!");
    }

    const user: userType = await response.json();

    console.log(user);

    return { user: user };
  } catch (error: any) {
    console.log(error);
    return { message: error?.message };
  }
};

export const logout = async () => {
  const logoutUrl = "/api/v1/auth/logout";

  try {
    const response = await fetch(logoutUrl);

    if (!response.ok) {
      throw new Error(`Something went wrong, please try again!`);
    }

    const res = response.json();

    return res;
  } catch (error: any) {
    console.error(error);
    return { message: error.message };
  }
};

export const getUserProfile = async (id: string) => {
  const url = `/api/v1/users/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Couldn't find user profile, sorry!`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error);
  }
};

export const setWinner = async (userId: string, locationId: string) => {
  const url = `/api/v1/locations/${locationId}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

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
  const { latitude, longitude, country } = coords;
  let url = `/api/v1/locations/`;
  // Check if latitude, longitude, and country are provided
  if (!latitude || !longitude || !country) {
    url += `?radius=${radius}`;
  }

  if (latitude && longitude && country) {
    url += `?latitude=${latitude}&longitude=${longitude}&radius=${radius}&country=${country}`;
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.log(res);
      throw new Error(`Couldn't fetch posts, please, try again later!`);
    }

    const data = await res.json();

    console.log(data);
    // Return the data
    return data;
  } catch (error: any) {
    console.log(error);
    return {message: error.message};
  }
};

export const searchUser = async (query: string | undefined) => {
  let url = `/api/v1/users/`;

  if (query) {
    url += `?search=${query}`;
  } else {
    return;
  }
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Something went wrong, please try again!`);
    }

    const data = await res.json();

    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return {message: error.message};
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
  } catch (error: any) {
    console.error(error);
    return {message: error.message};
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
  } catch (error: any) {
    console.error(error);
    return {message: error.message};
  }
};

export const getAddressData = async (latitude: number, longitude: number) => {
  const url = `/api/v1/locations/address?latitude=${latitude}&longitude=${longitude}`;

  try {
    const response = await fetch(url);

    console.log(response);

    if (!response.ok) {
      throw new Error(`Something went wrong! Couldn't get location data!`);
    }

    const data = await response?.json();

    const { address, country } = data;

    return { address, latitude, longitude, country };
  } catch (error: any) {
    console.error(error);
    return { message: error.message };
  }
};
