import React from 'react'

const Task1 = (props) => {
    console.log(props);
  return (
    <>
    <div>
      <h1>dear {props.name}, {props.age} welcome </h1>
    </div>
    </>
  )
}

export default Task1
