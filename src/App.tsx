// import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
// import { useAppSelector } from "./types";

const App = () => {
  // const [user, setUser] = useState();
  // const navigate = useNavigate();
  // const auth = useAppSelector((state) => state.auth);

  // if (!auth.user) {
  //   // setUser();
  //   navigate("/login");

  // } 

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
