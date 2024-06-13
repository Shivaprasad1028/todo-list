import React from "react";

//const deleteitems =() =>{

  //  console.log("deleted")
//}
const ToDolists = (props)=>{
return(
    <>
    <div className="cross-div">

<li className="text">
<i class="fa-solid fa-xmark icon-cross" onClick={() =>{
    props.onSelect(props.id);}}  />

    
{props.text}  </li>
</div></>
)
}

export default ToDolists;