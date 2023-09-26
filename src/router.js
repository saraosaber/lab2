import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from './App';
import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";
import Welcome from "./Welcome";
import PageNotFound from "./PageNotFound";
import Confirm from "./Confirm";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "compose-salad",
        element: <ComposeSalad />
      }, 
      {
        path: "view-order",
        element: <ViewOrder />,
        children: [
          {
            path: "*",
            element: <Confirm />
          }
        ]
      }, 
      {
      path: "",
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