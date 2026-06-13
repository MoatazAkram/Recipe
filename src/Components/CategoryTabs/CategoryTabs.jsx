import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function CategoryTabs() {

  const [categories, setCategories] = useState([])
  const [isError, setisError] = useState("")
  const navigate = useNavigate();

async function getCategoriesTabs(){
  try {
  const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
 setCategories(data.meals)
  } catch (error) {
    setisError(error.message)
    
  }
}

useEffect(() => {
  getCategoriesTabs()
 
}, [])

  if(isError){
    return <h1 className="text-2xl text-center text-light py-5 bg-red-500">{isError}</h1>
  }



  return <>
  <h1 className='text-4xl font-bold  bg-gradient-to-r from-primary   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent'>Learn, Cook, Eat Your Food</h1>
 <div className='sm:hidden mt-8'>
   <label htmlFor="tabs"></label>
  <select onChange={(e)=>{
    const value = e.target.value;
    if(value === "all"){
      navigate("/")
    }else{
      navigate(`/category/${value}`);
    }
  }} className='border border-gray-300 focus:border-blue-400 text-sm text-gray-900 w-full rounded-md' name="categoryTabs" id="tabs">
    <option value="all">All</option>
    {categories.map((category, index)=>{
      return <option key={index} value={category.strCategory}>{category.strCategory}</option>
    })}
  </select>
 </div>
 <ul className='mt-8 hidden sm:flex flex-wrap gap-4 text-gray-500 space-y-4 font-medium'>
  <li className='me-2'>
    <NavLink className='border border-gray-200 px-4 py-2 hover:text-gray-600 rounded-full hover:shadow-xl transition-all duration-300 hover:bg-gray-50' to="/">All</NavLink>
  </li>
  {categories.map((category , index)=>{
    return   <li key={index} className='me-2'>
    <NavLink className='border border-gray-400 px-4 py-2 hover:text-gray-600 rounded-full hover:shadow-xl transition-all duration-300 hover:bg-gray-50' to={`/category/${category.strCategory}`}>{category.strCategory}</NavLink>
  </li>
  })}
 </ul>
  </>
}
