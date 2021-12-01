import "antd/dist/antd.css"
import Foods from "./foods.json"
import { useState } from "react";
import { Row } from "antd";

import './App.css';

import FoodBox from "./components/FoodBox/FoodBox";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";
import Search from "./components/Search/Search";


function App() {

  const [foods, setFood] = useState(Foods)
  const [showForm, setShowForm ] = useState(true)
  

  return (
    <div className="App">
    {showForm &&
      <AddFoodForm foodsFromApp={foods} setFoodsFromApp={setFood}/>
        }
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Show Form'}</button>
        <Search foodsFromApp={foods} setFoodsFromApp={setFood}/>
          <Row>
          {foods.map((food, index) => {
            return(
                <FoodBox food={food}
                foodsFromApp={foods}
                setFoodsFromApp = {setFood}
                key={index + Date.now()}
                />
            )
          })}
          </Row>
    </div>
  );
}

export default App;
