import { initialStateType } from "@/types";

import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

type guessButtonProps = {
  guess: () => void;
  pending: boolean;
  textData: string;
};

const GuessButton = ({ guess, pending, textData }: guessButtonProps) => {
  const credits = useSelector((state: initialStateType) => state.credits);
  const handleClick = () => {
    console.log("Guess button clicked");
    guess();
  };

  return (
    <Button
      onClick={handleClick}
      disabled={pending || credits < 3 || textData === ""}
    >
      {pending ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        "Guess"
      )}
    </Button>
  );
};

export default GuessButton;
