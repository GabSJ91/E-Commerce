import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Views/Login/Login';
import './index.scss'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Views/Home/Home';
import Products from './Views/Products/Products';
import Pay from './Views/Pay/Pay'
import {PRODUCTS_MOCK} from './Mock/products.mock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK}/>,
  },

 {
    path: "/home",
    element: <Login/>,
  },


  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK}/>
  },

  {
    path: "/pay/payId",
    element: <Pay data={PRODUCTS_MOCK}/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
