import SaladCheckbox from "./SaladCheckbox";

export default function SelectExtra({options, name, state, stateSetter}) {

  const handleChange = (e) => {
    const { name, value, type, checked, id} = e.target;
    let buffer = {...state}
    if (buffer.hasOwnProperty(id)) {
      delete buffer[id]
    } else {
      buffer[id] = true;
    }
    console.log(buffer)
    stateSetter(buffer);
  }

  return (
    <div className="container-fluid py-4 row" >
      {options.map((x,i) => 
        <SaladCheckbox x={x} i={i} handleChange={handleChange} state={state[x]}></SaladCheckbox>
      )}
    </div>
  )
}

      /*<h2 key="extraHeader">Välj tillbehör:</h2>
        {extras.map((x, i) =>
          <React.Fragment key={i}>
            <input
              type="checkbox"
              id={x}
              name="extra"
              onChange={handleChange}
              checked={extra[x] || false} 
            />
            <label htmlFor={x}>{x}</label>
            <br />
          </React.Fragment>
      )}*/