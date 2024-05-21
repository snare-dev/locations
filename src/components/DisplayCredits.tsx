import { useAppSelector } from "@/types";
import { FaCoins } from "react-icons/fa";

const DisplayCredits = () => {
  const credits = useAppSelector((state) => state.creditCount.credits);

  const modal = document.getElementById("coin_purchase") as HTMLDialogElement;

  // const handleCoinPurchase = () => {
  //   console.log("Coin purchase clicked!");
  // };

  return (
    <div
      onClick={() => modal.showModal()}
      className="items-center h-10 rounded-md px-4 py-2 flex w-full border bg-slate-400 hover:cursor-pointer"
    >
      <FaCoins className="inline-block mr-2 text-amber-500" />
      <button className="font-bold text-white text-xl">{credits}</button>
      <dialog id="coin_purchase" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DisplayCredits;
