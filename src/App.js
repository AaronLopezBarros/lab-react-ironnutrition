import "antd/dist/antd.css"
import Foods from "./foods.json"
import { useState } from "react";

import './App.css';


function App() {

  const [foods, setFood] = useState(Foods)

  return (
    <div className="App">
      {foods.map((food, index) => {
        return(
          <div key={index + Date.now()}>
            <p>{food.name}</p>
            <img src={food.image} alt={food.name} width={150} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
