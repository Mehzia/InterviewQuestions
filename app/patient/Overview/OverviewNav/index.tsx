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
    <nav className=" mt-30 w-195">
      <h1 className="font-bold mb-2">{data?.nav.mainTitle}</h1>
      <div className="flex flex-start bg-gray-50 text-gray-500 rounded-xl pt-1 pb-1 pl-0.5">
        {data?.nav.navList.map((path) => (
          <NavLink
            key={path.link}
            to={path.link}
            className={({ isActive }) =>
              `p-2 rounded-xl px-20 ${
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
    </nav>
  );
}
export default OverviewNav;
