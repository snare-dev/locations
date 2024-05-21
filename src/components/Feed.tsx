// import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
// import { getPosts } from "@/services/apiCalls";

const data = [
  {
    id: "ajfjdf",
    userName: "amani",
    userImg: "XXXXXXXXXXXXXX",
    address: "0x1234567890",
    winner: false,

  },
  {
    id: "jdnso",
    userName: "xnaire",
    userImg: "XXXXXXXXXXXXXX",
    address: "0x1234567890",
    winner: false,

  },
  {
    id: "ajfksnidnijdf",
    userName: "blaq-idea",
    userImg: "XXXXXXXXXXXXXX",
    address: "0x1234567890",
    winner: false,

  },
  
];

const Feed = () => {
  //usestate for initial data
  // const [feedData, setFeedData] = useState();

  //useeffect for realtime data

  // useEffect(() => {
  //   const data = getPosts();
  //   //setFeedData(data);
  //   setFeedData(data);
  // }, []);

  return (
    <div className="mx-auto p-4">
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <SinglePost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
