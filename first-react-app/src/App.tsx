// import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  // let items = ["Mumbai", "Pune", "Bhopal", "New Delhi", "Chennai"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlert] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && <Alert onClose={() => setAlert(false)}>Be Alert</Alert>}
      <Button onClick={() => setAlert(true)}>Click Me!</Button>
    </div>
  );
}

export default App;
