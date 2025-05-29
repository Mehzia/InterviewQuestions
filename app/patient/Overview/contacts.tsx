import { useEffect, useState } from "react";

type ContactsData = {
    patient: string;
    email: string;
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
        <div>
        <h2 className="font-bold ">{title}</h2>
        {contacts.map((person) => {
        return (
          <div key={person.email}>
            <button className="bg-gray-400 text-black mt-4 w-2.5" onClick={() => handleContactClick(person)}>{person.patient}</button>
          </div>
        
        );
      })}
        </div>
    );
}
export default ContactsList;