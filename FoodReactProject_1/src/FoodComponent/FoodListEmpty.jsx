const FoodListEmpty = ({foodList}) => {
  return (
    <>
      {foodList.length === 0 && 
      <h2 className="container text-center text-danger fw-bold" style={{fontSize:'50px'}} >I am still Hungry.. <br/> Give me some Food..</h2>}
           
    </>
  )
}

export default FoodListEmpty
