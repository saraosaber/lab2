import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from './App';
import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";
import Confirm from "./Confirm";



async function inventoryLoader() {
  const inventory = {};
  await new Promise(resolve => setTimeout(resolve, 500)); 
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
        loader: inventoryLoader,
        element: <ViewOrder />,
        children: [
          {
            path: "confirm/:uuid",
            loader: inventoryLoader,
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