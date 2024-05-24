import { Post } from "@/types";
import GuessCounter from "./GuessCounter";
import ImageCard from "./ImageCard";
import UserDetails from "./UserDetails";

type postProps = {
  post: Post;
};

const SinglePost = ({post}: postProps ) => {
  return (
    <div className="flex flex-col border-t mb-8 min-w-96 justify-center items-center rounded-md shadow-lg p-4">
      <UserDetails
        userName={post.creatorName}
        userImg={post.creatorImg}
        address={post.address}
        winner={post.winner}
      />
      <ImageCard
        image={post.image}
        description={post.description}
        name={post.name}
        totalGuesses={post.totalGuesses}
      />
      <GuessCounter id={post.id} />
    </div>
  );
};

export default SinglePost;
