
import { Link } from "react-router-dom";

const Leaderboard = () => {
  //api call to get all users by ranking
  let id;

  return (
    <div className="drawer md:drawer-open h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <div className="px-2 m-2 tracking-widest font-bold text-2xl">
            LEADERBOARD
          </div>
          <li>
            <Link to={`/profile/:${id}`} className="flex items-start">
              <img
                src=""
                alt="user image"
                className="h-8 w-8 object-contain rounded-full"
              />
              <div className="flex flex-col ml-2">
                <h2 className="font-medium">User 1</h2>
                <p className="text-sm text-slate-300">wins: 400</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/profile/:${id}`} className="flex items-start">
              <img
                src=""
                alt="user image"
                className="h-8 w-8 object-contain rounded-full"
              />
              <div className="flex flex-col ml-2">
                <h2 className="font-medium">User 2</h2>
                <p className="text-sm text-slate-300">wins: 360</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
