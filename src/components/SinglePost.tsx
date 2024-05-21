import GuessCounter from "./GuessCounter";
import ImageCard from "./ImageCard";
import UserDetails from "./UserDetails";

type postProps = {
  post: {
    id: string;
    userName: string;
    userImg: string;
    address: string;
    winner: boolean;
  }
};

const SinglePost = ({post}: postProps ) => {
  return (
    <div className="flex flex-col border-t mb-8 min-w-96 justify-center items-center rounded-md shadow-lg p-4">
      <UserDetails userName={post.userName} userImg={post.userImg} address={post.address} winner={post.winner} />
      <ImageCard />
      <GuessCounter id={post.id} />
    </div>
  );
};

export default SinglePost;
