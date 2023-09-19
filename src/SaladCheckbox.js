import React from "react"

export default function SaladCheckbox({x, i, handleChange, state}) {

  return (
    <div className="col-md-3 padding" key={i}>
      <input
        type="checkbox"
        id={x}
        name="extra"
        onChange={handleChange}
        checked={state || false} 
      />
      <label className="pl-1" htmlFor={x}>{x}</label>
      <br />
    </div>
  )
}