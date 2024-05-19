
import { FaLock } from "react-icons/fa6";

type userProps = {
  userName: string;
  userImg: string;
  address: string;
  winner: boolean;
};


const UserDetails = ({ userName, address, userImg , winner}: userProps) => {


  return (
    <div className="flex space-x-4 w-full items-center">
      <img
        src={userImg}
        alt=""
        className="h-8 w-8 object-contain rounded-full"
      />
      <div className="flex flex-col">
        <h3 className="font-medium tracking-wider">{userName}</h3>
        {winner ? (
          <p className="text-sm font-medium text-green-500">
            <span className="text-sm text-slate300 font-medium">Location:</span>
            {address}
          </p>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-slate300">Location:</span>
            <FaLock className="text-xs text-red-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
