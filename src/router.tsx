import { createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HextechChest from "./components/HextechChest";
import Heart from "./components/Heart";
import Letter from "./components/Letter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/heart",
    element: <Heart />,
  },
  {
    path: "/chest",
    element: <HextechChest />,
  },
  {
    path: "/openletter",
    element: <Letter />,
  },
]);