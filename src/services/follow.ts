export const followUser = async (id: string) => {
  const url = `/api/v1/users/follow/${id}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    console.log(res);
    if (!res.ok) {
      throw new Error(`Something went wrong, please try again later!`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return { message: err.message };
  }
};

export const unfollowUser = async (id: string) => {
  const url = `/api/v1/users/unfollow/${id}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error(`Something went wrong, please try again later!`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return { message: err.message };
  }
};
