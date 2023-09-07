import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Component/Layout/Main";
import Home from "./Component/Home/Home";
import Shop from "./Component/Shop/Shop";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Checkout from "./Component/Checkout/Checkout";
import PrivateRouter from "./Component/routes/PrivateRouter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Home",
          element: <Home></Home>,
        },
        {
          path: "/Shop",
          element: (
            <PrivateRouter>
              <Shop></Shop>
            </PrivateRouter>
          ),
        },

        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
