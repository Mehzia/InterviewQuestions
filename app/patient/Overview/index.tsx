import { Outlet } from "react-router";
import OverviewNav from "./OverviewNav";
import ActivityList from "./ActivityList";

function Overview() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between gap-1 ml-320 mt-5 p-2 border border-gray-300 rounded-xl mb-4">
      <img src="/public/search.png" alt="Search Icon" className="w-6 h-6 " />  
      <input
        type="text"
        placeholder="Search patient "
        className="w-70 "
      />
      </div>
      <div className="flex flex-1 gap-10 ">
        <div >
          <h1 className="font-bold mt-10 text-2xl">Alena Bator</h1>

          <OverviewNav />
          <div className="mt-4">
            <Outlet />
          </div>
        </div>
        <div className=" border-l border-gray-100 mt-10 ">
        <ActivityList />
        </div>
      </div>
    </div>
  );
}
export default Overview;
