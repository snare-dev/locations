
import Leaderboard from "@/components/Leaderboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full n">
      <header className="">
        <Navbar />
      </header>
      <div className="flex ">
        <aside className="">
          <Sidebar />
        </aside>
        <main className="flex flex-col flex-1 px-4 mt-8 overflow-y-auto">
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
