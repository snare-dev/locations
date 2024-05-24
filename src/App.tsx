import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";

const App = () => {


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
