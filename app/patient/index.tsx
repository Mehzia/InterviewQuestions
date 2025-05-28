import { Link } from "react-router";

function SideBar() {
  return (
    <nav className="h-screen px-4 py-4 border-r-2 border-gray-50 w-60  ">
      <h1 className="font-bold pb-1">Patient Details</h1>
      <div className="flex flex-col  space-y-4">
        <Link to="/overview" className="hover:text-white hover:bg-blue-900 p-2 rounded-sm">
          Overview
        </Link>
        <Link to="/medical" className=" hover:text-white hover:bg-blue-900 p-2 rounded-sm">
          Medical info
        </Link>
        <Link to="/transmission" className="hover:text-white  hover:bg-blue-900 p-2 rounded-sm">
          Transmission Reports
        </Link>
        <Link to="/devices" className="hover:text-white hover:bg-blue-900 p-2 rounded-sm">
          Devices & Schedule
        </Link>
        <Link to="/clinic" className="hover:text-white  hover:bg-blue-900 p-2 rounded-sm">
          Clinic
        </Link>
        <Link to="/notes" className="hover:text-white  hover:bg-blue-900 p-2 rounded-sm">
          Notes
        </Link>
      </div>
      <div className="absolute bottom-4">
      <p>Olivia Rhye</p>
      <p className="text-gray-400 text-sm">olivia@myrhythmnow.com</p>
      </div>
    </nav>
  );
}
export default SideBar;
