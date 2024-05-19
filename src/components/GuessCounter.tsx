import { useReducer } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import GuessButton from "./GuessButton";

const initialState = { count: 3 };

const reducer = (
  state: { count: number },
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
};

const GuessCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const guessClick = (click: number) => {
    if (count.count === 0) {
      return;
    }

    dispatch({ type: "decrement", payload: click });
  };

  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Guess the name of this location</Label>
      <div className="flex items-center gap-2">
        <Textarea placeholder="Type your guess here." id="message" />
        <GuessButton guess={guessClick} counterVal={count.count} />
      </div>
    </div>
  );
};

export default GuessCounter;
