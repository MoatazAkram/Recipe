import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage'
import MealDetailsPage from './Pages/MealDetailsPage'
import NotFound from './Components/NotFound/NotFound'
import MealGrid from './Components/MealGrid/MealGrid'

const router = createBrowserRouter([
  {path:"/", element:<Layout/> , children:[
    {index:true , element:<HomePage/>},
    {path:"/mealdetails/:mealId", element:<MealDetailsPage/>},
    {path:"/category/:categoryName", element:<HomePage/>},
    {path:"*", element:<NotFound/>}
  ]},
])

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
