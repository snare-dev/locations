import { Post } from "@/types";
import GuessCounter from "./GuessCounter";
import ImageCard from "./ImageCard";
import UserDetails from "./UserDetails";
import WinnerComponent from "./WinnerComponent";

type postProps = {
  post: Post;
};

const SinglePost = ({ post }: postProps) => {
  const userId = "6653a039d7185efa5744ad92";

  let content;

  if (post.winner !== "") {
    content = (
      <div className="w-full rounded-md">
        <WinnerComponent postId={post.id} userId={userId} />
      </div>
    );
  }

  if (post.winner === "") {
    content = (
      <GuessCounter address={post.address} name={post.name} id={post.id} />
    );
  }

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

      {content}
    </div>
  );
};

export default SinglePost;
