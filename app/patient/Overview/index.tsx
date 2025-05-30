import { Outlet } from "react-router";
import OverviewNav from "./OverviewNav";

function Overview() {
  return (
    <div>
      <h1 className="text-3xl mt-20 font-bold">Alena Bator</h1>
      <OverviewNav />
      <Outlet />
    </div>
  );
}
export default Overview;
