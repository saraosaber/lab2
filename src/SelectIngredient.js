export default function SelectIngredient({options, name, state, stateSetter}) {

  function handleChange(e) {
    const { name, value, type, checked, id} = e.target;
    stateSetter(value)
    console.log(state)
  }

  return (
    <>
      <h2 key="basHeader">Välj {name}:</h2>
      <select key={name} name={name} onChange={handleChange} value={state}>
        <option selected=""></option>
        {options.map((x, i) => <option key={i} value={x}>{x}</option>)}
      </select>
    </>
  )
}