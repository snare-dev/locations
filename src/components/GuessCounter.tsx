import { useQuery } from "@tanstack/react-query";

import { initialStateType } from "@/types";
import { creditsActions } from "../redux/creditsSlice";

import { getLocationName } from "../services/apiCalls";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import GuessButton from "./GuessButton";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

type idType = {
  id: string;
};

const GuessCounter = ({ id }: idType) => {
  const [userGuess, setUserGuess] = useState("");
  const credits = useSelector((state: initialStateType) => state.credits);
  const dispatch = useDispatch();

  const { isError, isPending, error } = useQuery({
    queryKey: ["locationName", id],
    queryFn: () => getLocationName(id),
  });


  const guessClick = () => {
    //check if credits are enough
    if (credits < 3) {
      //send error message
      console.log("Not enough credits, please purchase some coins.");
      return;
    }
    //verify guess

    //compare guess to location name
    if (userGuess) {
      dispatch(creditsActions.rewardCredits(50)); //reward credits
      //add to wins slice
      //modify rank
      return "You guessed right, congratulations. You have been credited 50 coins to your account";
    }

    dispatch(creditsActions.deductCredits(3));
  };

  let content;

  if (isError) {
    content = <ErrorMessage message={error.message} />;
  }

  if (credits < 3) {
    content = <p className="text-red-500">Not enough credits</p>;
  }

  return (
    <div className="flex flex-col w-full gap-1.5">
      <Label htmlFor="message">Can you guess the name of this location?</Label>
      <div className="flex w-full items-center gap-2 py-2">
        <Textarea
          placeholder="Type your guess here."
          id="guess"
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <GuessButton
          guess={guessClick}
          pending={isPending}
          textData={userGuess}
        />
      </div>
      <div className="flex justify-center">{content}</div>
    </div>
  );
};

export default GuessCounter;
