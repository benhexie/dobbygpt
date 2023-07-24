import React from 'react'
import "./InfoBlock.css"

function InfoBlock({ info, disabled=false }) {
  return (
    <button className={`info__block ${disabled && "disabled"}`}>
        {info}
    </button>
  )
}

export default InfoBlock