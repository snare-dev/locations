import React from "react";

import { Button } from "@/components/ui/button";

type guessButtonProps = {
  guess: (arg: number) => void;
  counterVal: number;
};

const GuessButton = ({ guess, counterVal }: guessButtonProps) => {
  const handleClick = () => {
    console.log("Guess button clicked");
    // Add your logic here to handle the guess button click event
    guess(-1);
  };

  return (
    <Button onClick={handleClick} disabled={counterVal === 0}>
      Guess
    </Button>
  );
};

export default GuessButton;
