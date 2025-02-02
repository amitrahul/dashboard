import { useState } from "react";
import { FaBars, FaHome, FaUser } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-gray-900 text-white h-screen p-5 transition-all ${
          isOpen ? "w-40" : "w-16"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)} className="mb-5">
          <FaBars />
        </button>
        <ul>
          <li className="flex items-center space-x-2 my-4">
            <FaHome />
            {isOpen && <span>Home</span>}
          </li>
          <li className="flex items-center space-x-2 my-4">
            <FaUser />
            {isOpen && <span>Users</span>}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
