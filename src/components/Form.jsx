import React, { useState } from 'react';

const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    }
}


export default ({ onSubmit }) => {
    const { resetValue, ...text } = useInputValue("");
   
    return (
        <form 
            className='flex flex-col'
            onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
        }}>
            <input placeholder=" Shoes" className="self-center mt-5 text-black" {...text}/>
            
        </form>
    ) 
    
}