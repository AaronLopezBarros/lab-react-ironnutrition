import "antd/dist/antd.css"
import Foods from "./foods.json"
import { useState } from "react";

import './App.css';

import FoodBox from "./FoodBox";


function App() {

  const [foods, setFood] = useState(Foods)

  return (
    <div className="App">
      {foods.map((food, index) => {
        return(
          <FoodBox food={food}
            key={index + Date.now()}
          />
        )
      })}
    </div>
  );
}

export default App;
