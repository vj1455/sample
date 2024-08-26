import React from 'react'
import Button from './Component/Button';

const App = () => {
  const dropdownData = [{
    name:"Date of registraion " , inputType:"date"
   },
  {name:"vender score",inputType:"number"}
  ];
  return (
    <div>
      <Button dropdownConent = {dropdownData} buttonLabel = 'refine by'/>
    </div>
  )
}

export default App