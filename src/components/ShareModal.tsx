import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { IoLocationSharp } from "react-icons/io5";

import ErrorMessage from "./ErrorMessage";
import LoadingSipnner from "./LoadingSipnner";
import { createPost } from "@/services/apiCalls";
import { useAppSelector } from "@/types";
import { Input } from "./ui/input";
import { FormEvent } from "react";


const ShareModal = () => {
  const user = useAppSelector((state) => state.auth.user );
  const location = useAppSelector((state) => state.location);


  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      //do something i.e call react toast
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const formData = document.querySelector("form")!;
    const formData = new FormData(e.target as HTMLFormElement);

    //
    // get the form data
    const postData = {
      name: formData.get("name"),
      description: formData.get("description"),
      image: formData.get("image"),
      address: location.address,
      country: location.country,
      locationData: {
        coordinates: [location.longitude, location.latitude],
      },
      creatorId: user?.id,
      creatorImg: user?.userImg,
      creatorName: user?.userName,
    };

    // upload image to server
    // mutate( event: formData);
    mutate(postData);
  };

  let content;

  if (data) {
    content = <p className="text-green-500">{data.message}</p>;
  }

  return (
    <dialog id="share-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {content && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center space-y-3"
          >
            <h3 className="font-bold text-lg">Share Location To Guessers</h3>
            <div className="flex gap-3">
              <IoLocationSharp className="inline-block mr-2" />
              {/* <div className="border border-slate600 bg-slate-400 text-black font-medium text-lg">
                {location.address}
              </div> */}
              <Input disabled value={location.address} name="address" />
            </div>
            {isError && <ErrorMessage message={error.message} />}
            <div className="modal-action">
              <Button disabled={isError}>
                {isPending ? <LoadingSipnner /> : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ShareModal;
