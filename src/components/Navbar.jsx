import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { SiTask } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {

  const user = 'hasan'

  let navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="max-w-screen-xl mx-auto shadow-md w-full fixed top-0 left-0 right-0">
      <div className="md:flex items-center justify-between bg-white py-4 px-4 md:px-8 lg:px-16">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center   
      text-gray-800"
        >
          <span className="text-3xl text-first mr-1 pt-2">
            <SiTask />
          </span>
          TaskJet
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navItems.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-second duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* login logout functionality */}
          <div>
          {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm whitespace-nowrap  btn-ghost">
                  {user.displayName}
                </button>
              </li>

              <li>
                <button
                 
                  className="btn btn-sm whitespace-nowrap  btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-neutral">Login</button>
          </Link>
        )}
          </div>
          {/* <button>Sign In</button> */}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
