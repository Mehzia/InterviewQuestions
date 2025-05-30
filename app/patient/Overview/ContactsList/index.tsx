import { useEffect, useState } from "react";

type ContactsData = {
    patient: string;
    Email: string;
    Address: string;
    Phone: string;
};


function ContactsList () {
     const[contacts, setContacts] = useState<ContactsData[]>([]);
     const[title,setTitle] = useState<string>("");
     const[info,setInfo] = useState<ContactsData | null>(null);
    
     useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch("/contactsList.json");
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                if (Array.isArray(data.contactList)) {
                    setContacts(data.contactList);
                  } else {
                    console.error(data);
                    setContacts([]); 
                  }
          
                  setTitle(data.contactTitle);
            } catch (error) {
                console.error("Failed to fetch contacts:", error);
            }
            }
        fetchContacts();
        }, []);

        const handleContactClick = (contact: ContactsData) => {
            setInfo(contact);
            console.log("Selected contact:", contact);
        }
        return (
            <div className="flex p-4 bg-gray-50 mt-5">
                <div className="flex flex-col pr-4 border-r border-gray-300">
              <h2 className="font-bold ">{title}</h2>
              
              {contacts.map((person) => (
                <div key={person.Email}>
                  <button
                    className="bg-gray-200 flex rounded-2xl text-black mt-4 px-4 py-2"
                    onClick={() => handleContactClick(person)}
                  >
                    {person.patient}
                  </button>
                </div>
              ))}
              </div>
            <div className="flex flex-col pl-4">
              {info && (
                <div className="mt-8">
                  <p><strong>Patient Name:</strong> {info.patient}</p>
                  <p><strong>Email:</strong> {info.Email}</p>
                  <p><strong>Address:</strong> {info.Address}</p>
                  <p><strong>Phone:</strong> {info.Phone}</p>
                </div>
              )}
            </div>
            </div>
          );
        }
export default ContactsList;
