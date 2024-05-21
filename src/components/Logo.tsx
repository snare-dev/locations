import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className=" px-2 mx-2 hidden lg:flex tracking-widest font-bold text-2xl ">
      <Link to="/">LOCATIONS</Link>
    </div>
  );
}

export default Logo