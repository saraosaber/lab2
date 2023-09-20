export default function OrderItem({salad, i}){
  console.log("här" + salad.ingredients)
  return(
    <div key={salad.uuid}>
      <h4>Sallad {i+1}</h4>
      <div>{salad.ingredients.foundation}, {salad.ingredients.protein}, {Object.keys(salad.ingredients.extra).map(x => x).join(", ")}, {salad.ingredients.dressing}</div>
    </div>
  )
}