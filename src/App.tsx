import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";



const App = () => {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/profile",
          element: <UserProfile />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/logout",
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
