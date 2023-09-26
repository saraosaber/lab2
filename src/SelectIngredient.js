import Salad from "./Salad";

export default function SelectIngredient({ingredients, name, state, stateSetter}) {
  function handleChange(e) {
    const { name, value, type, checked, id} = e.target;
    stateSetter(value);
  }

  return (
    <div className="col-md-3">
      <h2 key="basHeader">Välj {name}:</h2>
      <select key={name} name={name} onChange={handleChange} value={state} className="form-select" required>
        <option disabled value="">Gör ditt val</option>
        {ingredients.map((x, i) => <option key={i} value={x[0]}>{x[0]} {x[1].price}kr</option>)}
      </select>
      <div className="invalid-feedback">Välj {name}</div>
    </div>
  )
}