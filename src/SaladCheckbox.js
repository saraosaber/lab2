import React from "react"

export default function SaladCheckbox({x, i, handleChange, state, price}) {
  return (
    <div className="col-md-3 padding" key={i}>
      <input
        type="checkbox"
        id={x}
        key={i}
        name="extra"
        onChange={handleChange}
        checked={state || false} 
      />
      <label className="pl-1" htmlFor={x}>{x} {price}kr</label>
      <br />
    </div>
  )
}