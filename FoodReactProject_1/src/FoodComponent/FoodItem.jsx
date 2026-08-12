let FoodItem = function(props){

    let {item,itemId,onClickHandler} = props; 

    return <li className="list-group-item text-success bg-warning m-2 fs-5">
           <b className="text-dark"> Id - {itemId} :</b> &nbsp; &nbsp; <i> '{item}' </i> <button className="btn btn-primary fw-bold" 
                                                 style={{float:'right'}} 
                                                 onClick={()=>onClickHandler (' ' + item)}>   
                                            Order Item
                                         </button>
           </li>


}
export default FoodItem;    // this hole Process is known as event emitter (Child to Parent Comunication)
