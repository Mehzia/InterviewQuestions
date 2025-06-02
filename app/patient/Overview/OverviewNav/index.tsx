import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import { overviewNavSchema } from "./types";

function OverviewNav() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["navtitles"],
    queryFn: async () => {
      try {
        const response = await fetch("/packageOverview.json");
        const responseJson = await response.json();
        const parsedResponse = overviewNavSchema.parse(responseJson);

        return parsedResponse;
      } catch (error) {
        console.error("Error fetching navigation data:", error);
      }
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading </div>;
  }

  console.log(data);
  return (
    <nav className="w-195">
      <h1 className="font-bold  text-gray-800 mb-2">{data?.nav.mainTitle}</h1>
      <div className="flex justify-between gap-2">
        <div className="w-full">
          <div className="flex justify-between bg-gray-50 text-gray-500 rounded-xl p-2">
            {data?.nav.navList.map((path) => (
              <NavLink
                key={path.link}
                to={path.link}
                className={({ isActive }) =>
                  `p-2 rounded-xl px-10 gap-4  ${
                    isActive
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }`
                }
              >
                {path.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className=" bg-gray-50   p-3 w-20 rounded-xl flex items-center justify-center hover:bg-white">
          <img src="/public/settings.png" alt="settings" width={25} />
        </div>
      </div>
    </nav>
  );
}
export default OverviewNav;
