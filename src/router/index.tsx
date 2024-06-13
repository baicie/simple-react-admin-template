import { lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";

const Demo = lazy(() => import("../view/demo/demo-container"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>error</div>,
    children: [],
  },
  {
    path: "/demo",
    element: <Demo />,
  },
];

const router = createBrowserRouter(routes);

export default router;
