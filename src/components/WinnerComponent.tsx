
import { getUserProfile } from "@/services/apiCalls";
import { userType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "./ErrorMessage";
import LoadingSipnner from "./LoadingSipnner";
import { Button } from "./ui/button";
import { followUser } from "@/services/follow";
import CreateChallenge from "./CreateChallenge";
import { useState } from "react";
import { showChallengeModal } from "@/services/challenge";

type winnerType = {
  userId: string;
  postId: string;
};

const WinnerComponent = ({ userId, postId }: winnerType) => {
  const [showModal, setShowModal] = useState(false);
  // const auth = useAppSelector((state) => state.auth);
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["winner", { postId, userId }],
    queryFn: () => getUserProfile(userId),
  });


  // const myProfile = auth.user;

  const user = data as userType;

  let content;

  if (isError) {
    content = <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    content = <LoadingSipnner />;
  }

  const followDiv = true;

  // if (myProfile?.id === user.id) {
  //   followDiv = false;
  // }

  const isFollowing = false;
  const isChallenging = false;

  //  isFollowing = myProfile?.followers.includes(user.id);
  //  isChallenging = myProfile?.challenges.includes(user.id);

  let viewButton = true;

  if (isFollowing) {
    viewButton = false;
  }

  if (isChallenging) {
    viewButton = false;
  }

  const challengeHandler = () => {
    // handle challenge
    setShowModal(true);
    showChallengeModal("challenge-modal");
  };

  // const winnerId = user.id;

  const followHandler =async () => {
    // handle follow
    const res =await followUser(userId);
    console.log(res);
  };

  return (
    <div className="bg-green-100">
      {content ? (
        content
      ) : (
          <>
            {showModal && (
              <CreateChallenge
                showModal={showModal}
                setShowModal={setShowModal}
                opponent={userId}
              />
            )}
          <div className="py-2 border px-4 gap-4 w-full flex items-center">
            <div className="rounded-full w-32 h-24 justify-center items-center border object-contain">
              <img src={user.userImg} alt="winner" className="border" />
            </div>
            <div className="flex border w-full flex-col gap-2">
              <div className="flex flex-col ">
                <h1 className="text-2xl font-bold  tracking-wider ">
                  Winner: {user.userName}
                </h1>
                <h3 className="font-medium">
                  Total Wins: {user.correctGuesses}
                </h3>
                <p className="text-sm">Rank:# {user.rank}</p>
              </div>
              {followDiv && (
                <div className="border flex justify-end gap-2 py-1">
                  {viewButton && (
                    <Button onClick={followHandler}>Follow</Button>
                  )}
                  {viewButton && (
                    <Button onClick={challengeHandler}>Challenge</Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WinnerComponent;
