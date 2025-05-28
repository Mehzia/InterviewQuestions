import React, { useEffect, useState } from "react";

interface Makeup {
  product: string;
  price: string;
}

function App() {
  const [data, setData] = useState<Makeup[]>([]);
  const [newItem, setNewItem] = useState<Makeup>({ product: "", price: "" });

  
  useEffect(() => {
    fetch("http://localhost:2000/makeup")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

 
  const handleAddItem = () => {
    if (!newItem.product || !newItem.price) {
      alert("Please fill out both fields.");
      return;
    }

    fetch("http://localhost:2000/addmakeup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setData((prev) => [...prev, data]);
        setNewItem({ product: "", price: "" }); 
      })
      .catch((err) => console.error("Add item error:", err));
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
            <strong>{item.product}</strong> - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
