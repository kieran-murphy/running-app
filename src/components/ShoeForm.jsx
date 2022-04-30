import React from 'react'
import Form from './Form';

const ShoeForm = ({shoes, setShoes}) => {
  return (
    <div
      onClick={() => {
      }}
      className="bg-slate-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      {/* <input className="self-center mt-5 text-black" type="text" placeholder=" Shoe"></input> */}
      <Form onSubmit={text => setShoes([{text, complete: false}, ...shoes])}/>
    </div>
  )
}

export default ShoeForm