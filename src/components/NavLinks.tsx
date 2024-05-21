import { Link } from "react-router-dom";

import { MdRssFeed } from "react-icons/md";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { IoPeopleSharp } from "react-icons/io5";

const links = [
  { name: "Feed", path: "/", icon: <MdRssFeed className="mr-2" /> },
  {
    name: "Communities",
    path: "/communities",
    icon: <IoPeopleSharp className="mr-2" />,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <BiSolidPlaneAlt className="mr-2" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <BsFillPersonFill className="mr-2" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <IoSettingsSharp className="mr-2" />,
  },
  { name: "Logout", path: "/logout", icon: <GrLogout className="mr-2" /> },
];

const NavLinks = () => {
  return (
      <div className="my-4">
          <li>
        {links.map((link) => <Link to={link.path}>{link.icon}{link.name}</Link>)}
          </li>
    </div>
  )
}

export default NavLinks