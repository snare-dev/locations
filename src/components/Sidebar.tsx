import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authActions } from "@/redux/authSlice";
import { GrLogout } from "react-icons/gr";

import NavLinks from "./NavLinks";
import { useAppDispatch, useAppSelector } from "@/types";
import { logout as logOutUser } from "@/services/apiCalls";
import { useQuery } from "@tanstack/react-query";
import LoadingSipnner from "./LoadingSipnner";
import { useState } from "react";

const Sidebar = () => {
  const [initiateLogout, setInitiateLogout] = useState(false);
  const watchID = useAppSelector((state) => state.location.watchID);
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["logout"],
    queryFn: logOutUser,
    enabled: initiateLogout, // Disable the query from running automatically
  });

  const handleLogout = () => {
    if (watchID) {
      navigator.geolocation.clearWatch(watchID);
    }
    setInitiateLogout(true); // Enable the query to run
    dispatch(authActions.logout());
    setInitiateLogout(false);
  };

  if (isError) {
    toast.error(error.message || "Error logging out");
  }

  if (data) {
    toast.success("Logged out successfully");
  }

  return (
    <div className="drawer lg:drawer-open h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content font-medium text-xl">
          <NavLinks />
          {/* logout */}
          <li className="flex">
            {isLoading ? (
              <LoadingSipnner />
            ) : (
              <button onClick={handleLogout}>
                <GrLogout className="mr-2 inline-block" />
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
