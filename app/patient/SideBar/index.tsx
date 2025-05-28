
import { NavLink } from "react-router";

function SideBar() {
  return (
    <nav className="fixed h-screen px-4 py-4 border-r-2 border-gray-50 w-60 ">
      <h1 className="font-bold pb-1">Patient Details</h1>
      <div className="flex flex-col  space-y-4">
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            `p-2 rounded-sm  ${
              isActive ? "bg-blue-800 text-white" : "hover:bg-blue-900 hover:text-white"
            }`
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/medical"
          className=" hover:text-white hover:bg-blue-900 p-2 rounded-sm"
        >
          Medical info
        </NavLink>
        <NavLink
          to="/transmission"
          className="hover:text-white  hover:bg-blue-900 p-2 rounded-sm"
        >
          Transmission Reports
        </NavLink>
        <NavLink
          to="/devices"
          className="hover:text-white hover:bg-blue-900 p-2 rounded-sm"
        >
          Devices & Schedule
        </NavLink>
        <NavLink
          to="/clinic"
          className="hover:text-white  hover:bg-blue-900 p-2 rounded-sm"
        >
          Clinic
        </NavLink>
        <NavLink
          to="/notes"
          className="hover:text-white  hover:bg-blue-900 p-2 rounded-sm"
        >
          Notes
        </NavLink>
      </div>
      <div className="absolute bottom-4">
        <p>Olivia Rhye</p>
        <p className="text-gray-400">olivia@myrhythmnow.com</p>
      </div>
    </nav>
  );
}
export default SideBar;
