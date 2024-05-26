import { challenge } from "@/types";

export const showChallengeModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement;
  modal.showModal();
};

export const challengeFunction = async (
  challengeData: challenge,
  creatorId: string
) => {
  const url = `/api/v1/challenges/create`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creatorId, challengeData }),
    });

    if (!res.ok) {
      throw new Error(`Something went wrong, please try again later!`);
    }

    const data: challenge = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
