import SinglePost from "./SinglePost";

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
  //useeffect for realtime data
  return (
    <div className="mx-auto p-4">
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <SinglePost posts={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
