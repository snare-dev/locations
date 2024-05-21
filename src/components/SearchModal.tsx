import { ReactNode } from "react";
import { createPortal } from "react-dom";

type modalContentProps = {
  content: ReactNode;
};

const SearchModal = ({ content }: modalContentProps) => {

  const portalDiv = document.getElementById("search") as HTMLDialogElement;
  
  return createPortal(
    <dialog id="search-modal" className="modal">
      <div className="p-4">{content}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>,
    portalDiv
  );
};

export default SearchModal;
