import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from './App';
import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";
import Confirm from "./Confirm";
import fetchAllIngredients from "./fetchInventory";

async function inventoryLoader() {
  const inventory = {};
  await new Promise(resolve => setTimeout(resolve, 5));
  return inventory;
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "compose-salad",
        loader: inventoryLoader,
        element: <ComposeSalad />
      }, 
      {
        path: "view-order",
        element: <ViewOrder />,
        children: [
          {
            path: "confirm/:uuid",
            element: <Confirm />
          }
        ]
      }, 
      {
      index: true,
      element: <Welcome />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  },
]);
export default router