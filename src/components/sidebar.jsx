import { useState } from "react";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    const hideSidebar = () => {
        setShowSidebar(false);
    }
    if (showSidebar) {
  return (
    <div className="w-40 h-full shadow-md bg-black px-1 fixed sidebar">
        <img src="/assets/img/logo.svg" className="w-20 h-20 mx-6 mt-5 logo" />
        <button className="btn btn-primary hamburger rotate-right" onClick={toggleSidebar}>
            <img src="/assets/img/hamburger-icon.svg" className="w-10 h-10 object-cover" />
        </button>
      <ul className="relative">
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Home
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/about"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            About
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/technology"
            data-mbd-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Technology
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/arts"
            data-mbd-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Arts
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/students"
            data-mbd-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Students
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/donate"
            data-mbd-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Donate
          </a>
        </li>
      </ul>
    </div>
  );
    } else {
        return (
            <div className="w-10 h-full shadow-md bg-black px-1 fixed sidebar">
                <button className="btn btn-primary hamburger" onClick={toggleSidebar}><img src="/assets/img/hamburger-icon.svg" className="w-10 h-10 object-cover" /></button>
            </div>
        )
    }
}
