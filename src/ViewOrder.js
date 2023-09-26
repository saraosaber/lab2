import OrderItem from "./OrderItem"
import { Outlet, useOutletContext } from "react-router-dom";



export default function ViewOrder() {
  const {salads} = useOutletContext();
  return (
    
    <>
    <Outlet />
    <br />
      {salads.map((salad,i) =>
        <OrderItem salad={salad} i={i} key={salad.uuid}> </OrderItem>
      )}
    <br />
    
    </>
  )
}