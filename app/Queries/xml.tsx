import { useState } from "react";
type Makeup = {
    product: string;
    price: string;
};

function Example() {
  const [data, setData] = useState<Makeup[] | undefined>();
  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:2000/makeup");
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      } else {
        console.error("Error loading data");
      }
    };
    xhr.send();
  }

  return (
    <div>
      <h1>XML Example</h1>
      <p>This is an example of an XML query.</p>
      <button onClick={handleClick}>Makeup Data</button>
      {data && (
        <ul>
          {data.map((item: any, index: number) => (
            <li key={index}>
              <h2>{item.product}</h2>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}
export default Example;
