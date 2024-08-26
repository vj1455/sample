import { useState , useEffect } from "react"
import React from 'react'

const Button = () => {
    
  function FilterCompent({dropdownContent,buttonLabel}){
    const [isOpen , setIsOpen] = useState(false);

    useEffect(()=>{
      document.getElementById('filter-button').textContent = buttonLabel;
    },
  [buttonLabel]
  );
  const handleButtonClick = () =>{
    setIsOpen(!isOpen)
  };
  }
  return (
    <div>
     <button id = "filter-button " onClick = {handleButtonClick}>{buttonLabel}
     

     </button>
     {
      isOpen && (
        <ul>
          {dropdownContent.map((item,index)=>{
            (
              <li>{item.name}:<input type={item.inputType}/></li>
            )
          })}
        </ul>
      )
     }
    </div>
  )
}
export default Button