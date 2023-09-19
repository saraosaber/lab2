import OrderItem from "./OrderItem"

export default function ViewOrder({salads}) {
  console.log(salads)
  return (
    
    <>
    <br />
    {salads.map((salad,i) =>
      <OrderItem salad={salad} i={i}> </OrderItem>
    )}
    <br />
    </>
  )
}