import React, { useState } from 'react';


export default ({ onSubmit, useInputValue }) => {
    const { resetValue, ...text } = useInputValue("");
   
    return (
        <form 
            className='flex flex-col'
            onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
        }}>
            <input placeholder="Shoes" className="self-center mt-5 text-black text-center rounded-md" {...text}/>
            
        </form>
    ) 
    
}