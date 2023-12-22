// import Logo from '../../Shared/Logo'

// Icons
import { SiTask } from "react-icons/si";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const {logOut} = useAuth()

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-third text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="flex items-center cursor-pointer p-4 font-bold">
            <span className="text-3xl text-first mr-2 pt-2">
              <SiTask />
            </span>
            Taskjet
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-third w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-third mx-auto">
              <span className="text-3xl text-first mr-2 pt-2">
                <SiTask />
              </span> 
              Taskjet
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={BsGraphUp}
                label="Status"
                address="/status"
              />
              <MenuItem
                icon={BsGraphUp}
                label="Create a Task"
                address="/createTask"
              />

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FaHome}
            label="Home"
            address="/"
          />
          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button onClick={logOut} className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
