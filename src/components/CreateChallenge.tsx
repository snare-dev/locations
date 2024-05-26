import { Button } from "./ui/button";
import { FaCoins } from "react-icons/fa";

import ErrorMessage from "./ErrorMessage";
import LoadingSipnner from "./LoadingSipnner";
import { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { challengeFunction } from "@/services/challenge";
import { toast } from "react-toastify";
import { challenge, useAppSelector } from "@/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type challengeType = {
  showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    opponent: string;
};

const CreateChallenge = ({ setShowModal, opponent }: challengeType) => {
  const auth = useAppSelector((state) => state.auth.user);

  //   const userId = auth.user.id;

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: () => challengeFunction(userId, data),
    onSuccess: () => {
      handleSuccess();
    },
    onError: () => {
      handleError();
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
      const data = Object.fromEntries(formData.entries());

      const newData = {...data, opponent}

    console.log(newData);

    // mutate(data);
  };

  const handleSuccess = () => {
    toast.success("Challenge created successfully");
    // close modal
    setShowModal(false);
  };

  const handleError = () => {
    toast.error("Something went wrong, please try again");
  };

  return (
    <dialog id="challenge-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center space-y-3 w-full relative"
        >
          <h3 className="font-bold text-lg">Create Challenge!</h3>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" placeholder="Challenge Name" />
          </div>{" "}
          <div className="grid w-96 gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              placeholder="What's the challenge about?"
              id="description"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="prize">Prize (Coins)</Label>
            <Input name="prize" id="prize" placeholder="Prize Amount" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="stake">Stake</Label>
            <div className="flex items-center">
              {/* change icon color if confirmed  */}
              <FaCoins className="text-xl text-gray-600 inline-block mr-2" />
              <Input
                name="stake"
                id="stake"
                placeholder="Enter Stake Amount to Confirm Stake"
              />
            </div>
          </div>{" "}
          {isError && <ErrorMessage message={error.message} />}
          <div className="flex justify-end items-center pt-6 pb-2">
            <Button
              disabled={isPending}
              className="absolute right-2"
            >
              {isPending ? <LoadingSipnner /> : "Submit"}
            </Button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CreateChallenge;
