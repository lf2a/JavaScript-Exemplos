import React from 'react'
import './Test.css'

export default function Test(props) {
  return (
    <div className="Test">
      <h1>Olá {props.name} and {props.age} years old</h1>
      <p onClick={props.click}>{props.children}{props.name}</p>
      <input type="text" onChange={props.changed} />
    </div>
  )
}