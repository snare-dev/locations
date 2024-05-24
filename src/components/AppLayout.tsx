import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Leaderboard from "@/components/Leaderboard";
import Sidebar from "@/components/Sidebar";
import { useAppSelector } from "@/types";

const AppLayout = () => {
 const user = useAppSelector((state) => state.auth.user)

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <header className="">
        <Navbar />
      </header>
      <div className="flex">
        <aside className="">
          {/* <Sidebar /> */}
          <div className="w-64 h-full bg-slate-400">
            <h1>{user?.userName}</h1>
            <h3>{user?.id}</h3>
          </div>
        </aside>
        <main className="flex flex-1 px-4">
          <Outlet />
        </main>
        <aside className="">
          <Leaderboard />
        </aside>
      </div>
    </div>
  );
};

export default AppLayout;
