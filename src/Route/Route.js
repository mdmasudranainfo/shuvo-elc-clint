const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Pages/HomePage/Home/Home");
const { default: Main } = require("../Components/Pages/Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
