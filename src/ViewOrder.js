import OrderItem from "./OrderItem"

export default function ViewOrder({salads}) {
  return (
    
    <>
    <br />
      {salads.map((salad,i) =>
        <OrderItem salad={salad} i={i} key={salad.uuid}> </OrderItem>
      )}
    <br />
    </>
  )
}