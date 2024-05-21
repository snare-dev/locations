import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { ReactEventHandler } from "react";

const ShareModal = () => {
  const { mutate } = useMutation({
    mutationFn: () => {
      // upload image to server
    },
  });

  const handleSubmit = () => {
    // e.preventDefault();
    // upload image to server
    // mutate( event: formData);
  };

  return (
    <dialog id="share-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <div className="modal-action">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ShareModal;
