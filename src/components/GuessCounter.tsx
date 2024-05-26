import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { initialStateType } from "@/types";
import { creditsActions } from "../redux/creditsSlice";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import GuessButton from "./GuessButton";
import WinnerComponent from "./WinnerComponent";
import { setWinner } from "@/services/apiCalls";

type counterPropsType = {
  id: string;
  name: string;
  address: string;
};

const GuessCounter = ({ name, address, id }: counterPropsType) => {
  // const user = useAppSelector((state) => state.auth.user);
  const userId = "6653a039d7185efa5744ad92";
  const [userGuess, setUserGuess] = useState("");
  const [correct, setCorrect] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const credits = useSelector((state: initialStateType) => state.credits);
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: () => setWinner(userId, id),
  });

  const guessClick = () => {
    setIsPending(true);
    //check if credits are enough
    if (credits < 3) {
      //send error message
      toast.error("Not enough credits, please purchase some coins.");
      return;
    }
    //verify guess
    //compare guess to location name
    const addressEx = new RegExp(address);
    const nameEx = new RegExp(name);

    if (nameEx.test(userGuess) || addressEx.test(userGuess)) {
      setIsPending(false);
      setCorrect(true);
      setIsWinner(true);
      mutate();
      dispatch(creditsActions.rewardCredits(50)); //reward credits
      //add to wins slice
      //modify rank
    } else {
      setWrong(true);
      setIsPending(false);
    }

    dispatch(creditsActions.deductCredits(3));
  };

  if (correct) {
    toast.success(
      "You guessed right, congratulations. You have been credited 50 coins to your account"
    );
  }

  if (wrong) {
    toast.error("You guessed wrong, please try again.");
    setWrong(false);
  }

  return (
    <>
      {isWinner ? (
        <div className="w-full rounded-md">
          <WinnerComponent postId={id} userId={userId} />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="message">
            Can you guess the name of this location?
          </Label>
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
        </div>
      )}
      <div className="flex justify-center">
        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default GuessCounter;
