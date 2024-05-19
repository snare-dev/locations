import GuessCounter from "./GuessCounter";
import ImageCard from "./ImageCard";
import UserDetails from "./UserDetails";

type postProps = {
  posts: {
    id: string;
    userName: string;
    userImg: string;
    address: string;
    winner: boolean;
  }
};

const SinglePost = ({posts}: postProps ) => {
  return (
    <div className="flex flex-col mb-8 min-w-96 justify-center items-center rounded-md shadow-lg p-4">
      <UserDetails userName={posts.userName} userImg={posts.userImg} address={posts.address} winner={posts.winner} />
      <ImageCard />
      <GuessCounter />
    </div>
  );
};

export default SinglePost;
