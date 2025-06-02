import { useEffect, useState } from "react";
import { set } from "zod/v4";

type List = {
  name: string;
  date: string;
  description: string;
  time: string;
};

type ActivityListData = {
  topic: string;
  list: List[];
};

function ActivityList() {
  const [activityList, setActivityList] = useState<ActivityListData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/activitylist.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setActivityList(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch activity list:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" h-screen w-100 fixed ">
      <h2 className="sticky top-0 z-10 shadow-xl bg-white border border-gray-100 p-4 font-bold text-xl ">
        {activityList?.topic}
      </h2>
        <div className="overflow-y-scroll h-full scrollable-element ">
      <div className="grid grid-rows-10 gap-16 p-8 mt-2 relative">
        {activityList?.list.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-start text-sm ">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-blue-500">{item.description}</p>
              </div>
              <div className="text-gray-500 text-xs ">
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
export default ActivityList;
