import NavLinks from "./NavLinks";
import { Button } from "./ui/button";
import DisplayCredits from "./DisplayCredits";
import Logo from "./Logo";
import { FaShareAlt } from "react-icons/fa";
import SearchField from "./SearchField";
import ShareModal from "./ShareModal";

const Navbar = () => {

  const handleShare = async () => {
    const modal = document.getElementById("share-modal") as HTMLDialogElement;
    // Show the modal
    modal.showModal();
  };



  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Logo />
          <SearchField />
          <div className="w-32 md:w-64 mr-4 md:mr-0">
            <ul className="w-full flex items-center space-x-2 justify-around">
              <li>
                <DisplayCredits />
              </li>
              <li className="hidden md:block">
                <Button size={"lg"} onClick={handleShare}>
                  Share
                </Button>
              </li>

              <li className="md:hidden">
                <FaShareAlt
                  onClick={handleShare}
                  className="text-slate-500 hover:cursor-pointer hover:scale-110"
                  size={26}
                />
              </li>
            </ul>
            <ShareModal />
          </div>
        </div>
      </div>
      {/* on mobile view */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <div className="px-2 m-2 tracking-widest font-bold text-2xl">
            LOCATIONS
          </div>
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
