import { Input, } from 'antd'
import { useState } from 'react'
import './AddFoodForm.css'

const AddFoodForm = (props) => {

    const [ inputName, setInputName ]         = useState('') 
    const [ inputImage, setInputImage ]       = useState('') 
    const [ inputCalories, setInputCalories ] = useState(0) 
    const [ inputServings, setInputServings ] = useState(0) 
    

    const addNewFood = () => {
        const foodCopy = [ ...props.foodsFromApp ]

        foodCopy.push({
            name: inputName,
            image: inputImage,
            calories: inputCalories,
            servings: inputServings,
        })

        props.setFoodsFromApp(foodCopy)
       
    }

    return(
        <div className="align-form">
            <div className="add-food-form">
                <h2>Create new food</h2>

                <p>Name: </p>
                <Input type="text" onChange={(event) => {setInputName(event.target.value)}} />

                <p>Image: </p>
                <Input type="text" onChange={(event) => {setInputImage(event.target.value)}} />

                <p>Calories: </p>
                <Input type="number" onChange={(event) => {setInputCalories(event.target.value)}} />

                <p>Servings: </p>
                <Input type="number" onChange={(event) => {setInputServings(event.target.value)}} />
                

                <button onClick={ () => addNewFood() } >Create food</button>
            </div>
        </div>
        
    )
}







export default AddFoodForm