import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState<any[]>([]);
    const [newItem, setNewItem] = useState({ product: "", price: "" });
    useEffect (() => {
        getMakeup();
    }, []);

    const getMakeup = async () => {
        await axios.get("http://localhost:2000/makeup")
        .then((response) => {
            setData(response.data);
        })
        .catch(error => console.error(error));
    };
     
    const handleAddItem = async () => {
        if (!newItem.product || !newItem.price) {
            alert("Please fill out both fields.");
            return;
        }
        await axios.post("http://localhost:2000/addmakeup", newItem)
            .then(response => {
                setData(prev => [...prev, response.data]);
                setNewItem({ product: "", price: "" });
                getMakeup(); // Refresh data after adding new item
            })
            .catch(error => console.error("Error adding item:", error));

        console.log("New data fetch:");
    };

    return (
        <div>
            <h1>Makeup List</h1>
            <input
                type="text"
                placeholder="Product name"
                value={newItem.product}
                onChange={(e) => setNewItem({ ...newItem, product: e.target.value })}
            />
            <input
                type="text"
                placeholder="Price"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <button onClick={handleAddItem}>Add Item</button>
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <h2>{item.product}</h2>
                    <p>{item.price}</p>
                </li>
            ))}
        </ul>
        </div>
    )}
export default App;
