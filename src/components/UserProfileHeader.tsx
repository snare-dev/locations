type userDataProps = {
  userData: {
    id: string;
    userName: string;
    userImg: string;
    totalPosts: number;
    rank: number;
    bio: string;
    followers: number;
    correctGuesses: number;
    credits: number;
  };
};

const UserProfileHeader = ({ userData }: userDataProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-4 w-full border-slate-900 border">
        <div className="mr-4">
          <img
            src={userData.userImg}
            alt="user image"
            className="h-24 w-24 object-contain rounded-full border border-slate-400"
          />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 w-full justify-start gap-4 border border-slate-900">
          <div className="px-4 text-center flex flex-col">
            <p className="capitalize font-semibold">Posts</p>
            <p>{userData.totalPosts}</p>
          </div>
          <div className="px-4 text-center flex flex-col">
            <p className="capitalize font-semibold">Rank</p>
            <p>#{userData.rank}</p>
          </div>
          <div className="px-4 text-center flex flex-col">
            <p className="capitalize font-semibold">Credits</p>
            <p>{userData.credits}</p>
          </div>
          <div className="px-4 text-center flex flex-col">
            <p className="capitalize font-semibold">Guessers</p>
            <p>{userData.followers}</p>
          </div>
          <div className="px-4 text-center flex flex-col">
            <p className="capitalize font-semibold">Wins</p>
            <p>{userData.correctGuesses}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-medium capitalize tracking-wider">
          {userData.userName ? userData.userName : "username"}
        </h2>
        <p className="text-md tracking-wide">
          {userData.bio ? userData.bio : "bio"}
        </p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
