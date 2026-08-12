import AppName from "./FoodComponent/AppName";
import FoodInput from "./FoodComponent/FoodInput";
import FoodListEmpty from "./FoodComponent/FoodListEmpty";
import FoodRender from "./FoodComponent/FoodRender";
import { useState } from "react";

const App = () => {

let initialFoodList = ['Mix dal','Dal Makhni', 'Raita', 'Chapati', 'Rice','Pickle' , 'Salad' ,];

let [nameFood, setNameFood] = useState('')   

let [foodList,setFoodList] = useState(initialFoodList);

 let onKeyDownHandler = ()=>{
        if(event.key === 'Enter')
        { 
        if(event.target.value.trim().length !== 0){ 
         setNameFood(event.target.value);     
         console.log(nameFood);

         setFoodList([...foodList, event.target.value]);
         }
        }
    }

  return (
    <>
      <AppName appName="Food App" />
      <FoodInput onKeyDownHandler={onKeyDownHandler}/>
      <h2>  New Food : {nameFood} </h2>
       <FoodListEmpty foodList={foodList} /> 
      <FoodRender foodList={foodList}/>
    </>
  )
}

export default App