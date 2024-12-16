import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import CategoriesPage from './Pages/CategoriesPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
  },
  {
    path: "/categories",
    element: <CategoriesPage/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </StrictMode>
)