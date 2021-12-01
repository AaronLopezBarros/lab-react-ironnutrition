
import { Input } from 'antd'
import './Search.css'


const Search = (props) => {

    const { foodsFromApp, setFoodsFromApp } = props
    const searchFood = (event) => {
    let    foodsCopy = foodsFromApp.filter((food) => {
            return food.name.toLowerCase().includes(event.toLowerCase())
             })
        setFoodsFromApp(foodsCopy)
    }
    
    return (
        <div className="align-search">
            <div className="search" >
                <Input type="text" onChange={(event) => searchFood(event.target.value)}/> 
            </div>
        </div>
        
        
    )
}

export default Search