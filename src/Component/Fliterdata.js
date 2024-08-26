import React ,{useState}from 'react'

const Fliterdata = ({label , options}) => {
    const [isOpen , setIsOpen ] = useState(false);
    const handelButtonClick = () =>{
        setIsOpen(!isOpen);
    };
    return(
        <div>
            <button onClick = {handelButtonClick}>{label}</button>
            {
                isOpen && (
                    <ul>
                        {
                            options.map((option , index ) =>{
                                (
                                    <li key = {index}>{option.name}</li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}
   

export default Fliterdata;
