const FoodInput = ({onKeyDownHandler}) => {

    
  return (
    <>
       <div className="container">
       <input type="text" placeholder="Enter Food Name" className="w-100 mb-5 fs-2 }" onKeyDown={onKeyDownHandler}/>
       </div>
    
 
    </>
  )
}

export default FoodInput
