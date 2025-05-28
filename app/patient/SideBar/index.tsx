import { Query, QueryClient, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";

function SideBar() {
  const { data } = useQuery({
    queryKey: ["navlinks"],
    queryFn: async () => {
      const response = await fetch("/patientNav.json");
      return response.json();
    },
  });

  console.log(data);

  return (
    <nav className="fixed h-screen px-4 py-4 border-r-2 border-gray-50 w-60 ">
      <h1 className="font-bold pb-1">{data?.nav?.title}</h1>
      <div className="flex flex-col  space-y-4">
        {data?.nav?.navList?.map((path) => (
          <NavLink
            key={path.link}
            to={path.link}
            className={({ isActive }) =>
              `p-2 rounded-sm ${
                isActive
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-900 hover:text-white"
              }`
            }
          >
            {path.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
export default SideBar;

 
