import FoodItem from "./FoodItem";

export default function FoodRender(props){     // rendering means new paint 
    let  itemId=0;

     function onClickHandler(item){  // callback function
        alert(item + ' is Ordered');
     }
    return <>
    
    <ul className = "list-group fw-bold w-100 container">
     
     {props.foodList.map(item=>  {
         itemId++;
        return <FoodItem key={itemId} item={item} itemId={itemId} onClickHandler={onClickHandler}/>
     }
     )}
    </ul>
   

    </>
}