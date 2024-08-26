
import React from 'react'
import Fliterdata from "./Component/Fliterdata"


const App = () => {
  return (
    <div>
      <Fliterdata label = "Filters" options={[
        {name: "date of reg"},
        {name: "vender score"}
      ]} />
    </div>
  )
}
export default App