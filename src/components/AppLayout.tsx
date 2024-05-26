import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Leaderboard from "@/components/Leaderboard";
import Sidebar from "@/components/Sidebar";

const AppLayout = () => {

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <header className="">
        <Navbar />
      </header>
      <div className="flex">
        <aside className="">
          <Sidebar />
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
