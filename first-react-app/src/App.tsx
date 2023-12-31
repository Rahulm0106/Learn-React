// // import ListGroup from "./components/ListGroup";

// // import Alert from "./components/Alert";

// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import { useState } from "react";

// function App() {
//   // let items = ["Mumbai", "Pune", "Bhopal", "New Delhi", "Chennai"];

//   // const handleSelectItem = (item: string) => {
//   //   console.log(item);
//   // };
//   const [alertVisible, setAlert] = useState(false);
//   return (
//     <div>
//       {/* <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       /> */}
//       {alertVisible && <Alert onClose={() => setAlert(false)}>Be Alert</Alert>}
//       <Button onClick={() => setAlert(true)}>Click Me!</Button>
//     </div>
//   );
// }

// export default App;

// Hooks

// 1. Hooks are used in function components only and not in app Component
// 2. useState always work in sequential order.
// 3. Hooks cannot be nested in anything neither if statement nor function.

//useState tutorial - https://youtu.be/O6P86uwfdR0?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
// import React, { Component, useState } from "react";

// function App() {
//   const [count, setCount] = useState(() => {
//     console.log("run function");
//     return 0;
//   }); //usestate always returns an array with two values

//   function decrementCount() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   function incrementCount() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   return (
//     <div>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   );
// }

// export default App;

//useEffect tutorial - https://youtu.be/0ZJgIjIuY7U?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
import React, { useState, useEffect } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  useEffect(() => {
    console.log("resource changed");

    return () => {
      console.log("return from resource changed");
    };
  }, [resourceType]);

  return (
    <>
      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{[resourceType]}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })} */}
      {/* <div>{windowWidth}</div> */}
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{[resourceType]}</h1>
    </>
  );
}
