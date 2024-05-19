import UserProfileBody from "../components/UserProfileBody";
import UserProfileHeader from "../components/UserProfileHeader";

const userData = 
  {
    id: "ajfjdf",
    userName: "amani",
    userImg: "XXXXXXXXXXXXXX",
    totalPosts: 34,
    rank: 2546,
    bio: "xxxxxxx",
    followers: 254,
    correctGuesses: 25,
    credits: 10,
  }


const UserProfile = () => {
  return (
    <div>
      <UserProfileHeader userData={userData} />
      <UserProfileBody />
    </div>
  )
}

export default UserProfile