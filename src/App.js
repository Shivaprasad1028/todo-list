import React, { useState } from "react";
import ToDolists from "./Todolists";

const App = (()=>{
const[inputList , setinputList] = useState();
const [Items ,setItems] =useState([]);  // created a empty array

 const inputEvent = (event) =>{
  console.log(event.target.value)
  setinputList(event.target.value)


 }

 const lisofitems = ()=>{
 setItems((oldItems)=>{
   return[... oldItems,inputList] ;   //whatever is giving input will be stored here in the empty array 
 });
 setinputList("");
 alert("Added Successfully")
 };


 const deleteitems =(id) =>{

    console.log("deleted")

    setItems((oldItems) =>{
      return oldItems.filter((arrElement,index)=>{
        return index !== id;
      })
    })
    alert("Deleted Successfully")
}

 return(

  <>
    <div  className="main_div">
      <h1> ToDolists</h1>
      <input type="text" placeholder="Add a Item" onChange={inputEvent} value={inputList}/>
      
     <button onClick={lisofitems}> <i class="fa-solid fa-plus icon-plus" /></button>
      <ol> 

    

        { /*   {inputList} */}
          
         { Items.map((itemValue,index) =>{
             return <ToDolists key={index} id={index} onSelect={deleteitems}
                text = {itemValue}
              />;
              
          })  }
     
       
      </ol>
    </div>
  </>
 )

}
)
export default App;
