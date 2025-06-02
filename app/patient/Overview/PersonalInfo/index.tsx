
import { useEffect, useState } from "react";

type Details = {
  label: string;
  name: string;
};

type PatientsData = {
  title: string;
  patient: Details[];
  subTitle: string;
  contact: Details[];
}


function PersonalInfo() {
  const[apiData, setApiData] = useState<PatientsData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/personalInfo.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
       
          setApiData(data);
      
      } catch (error) {
        console.error("Failed to fetch personal info:", error);
      }
    };
    fetchData();
  },[]);
  return (
       <div className="grid p-4 bg-gray-50 mt-5 w-195">
       <div className="grid  ml-4 ">
      <h1 className="font-bold text-xs">{apiData?.title}</h1>
      <div className="grid grid-cols-3 mt-4 gap-4">
      {apiData?.patient.map((detail,index) => (
        <div key={index}>
          <div className="text-gray-400 text-[10px]">{detail.label}</div>
          <div className="font-medium text-xs mt-2">{detail.name}</div>
        </div>
      ))}
      </div>
      <h1 className="font-bold mt-8 mb-4 text-xs">{apiData?.subTitle}</h1>
      <div className="grid grid-cols-3 mt-2 gap-4">
      {apiData?.contact.map((contacts,index) => (
        <div key={index}>
          <div className="text-gray-400 text-[10px]">{contacts.label}</div>
          <div className="font-medium text-xs mt-2">{contacts.name}</div>
        </div>
      ))}
      </div>
      <div className="border-t mt-6 p-4 border-gray-300 w-186">
      <h1 className="font-bold text-xs">Notes</h1>
      <p className="text-gray-400 text-xs mt-2">Alena Bator available from 9 am to 11 pm for calls.</p>
      </div>
      </div>
    </div>
  );
}
export default PersonalInfo;
