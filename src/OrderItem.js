export default function OrderItem({salad, i}){
  return(
    <div key={salad.uuid}>
      <h4>Sallad {i+1}</h4>
      <div>{salad.ingredients.foundation}, {salad.ingredients.protein}, {Object.keys(salad.ingredients.extra).map(x => x).join(", ")}, {salad.ingredients.dressing}, {salad.getPrice()}kr</div>
    </div>
  )
}