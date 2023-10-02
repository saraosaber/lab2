import SaladCheckbox from "./SaladCheckbox";

export default function SelectExtra({extras, state, stateSetter}) {
  const handleChange = (e) => {
    const { name, value, type, checked, id} = e.target;
    let buffer = {...state}
    if (buffer.hasOwnProperty(id)) {
      delete buffer[id]
    } else {
      buffer[id] = true;
    }
    stateSetter(buffer);
  }

  return (
    <>
      <h3>Tillbehör: </h3>
      <div className="container-fluid py-4 row">
        {extras.map((x) => 
          <SaladCheckbox key={x} x={x[0]} handleChange={handleChange} state={state[x[0]]} price={x[1].price}></SaladCheckbox>
        )}
      </div>

    </>
  )
}