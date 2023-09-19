export default function OrderItem({salad, i}){
  console.log("här" + salad.ingredients)
  return(
    <div>
      <h4>Sallad {i+1}</h4>
      <list>
        <li>{salad.ingredients.foundation} </li>
        <li>{salad.ingredients.protein}</li>
        {Object.keys(salad.ingredients.extra).map(x => 
          <li>{x}</li>)}
        <li>{salad.ingredients.dressing}</li>
      </list>
    </div>
  )
}