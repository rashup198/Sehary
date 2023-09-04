import React from 'react'
import "./Parent.css"

const Parent = (props) => {
  return (
    <div className={props.cName}>
      <img className='heroImage'alt='heroImg' src={props.heroImg}></img>

      <div className='heroText'>
        <h1>{props.heading}</h1>
        <p>{props.Text}</p>
        <a href={props.url} className={props.btnClass}>Travel With Sehary</a>
      </div>
    </div>
  )
}       

export default Parent