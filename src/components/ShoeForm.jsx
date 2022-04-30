import React, {useState} from 'react'
import Form from './Form';


const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
      value,
      onChange: e => setValue(e.target.value),
      resetValue: () => setValue("")
  }
}


const ShoeForm = ({shoes, setShoes}) => {
  return (
    <>
    <div
      onClick={() => {
      }}
      className="bg-slate-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      
      <Form useInputValue={useInputValue} onSubmit={el => setShoes([el, ...shoes])}/>
    </div>
    
    </>
  )
}

export default ShoeForm