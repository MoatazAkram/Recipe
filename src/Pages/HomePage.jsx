import React from 'react'
import CategoryTabs from './../Components/CategoryTabs/CategoryTabs';
import MealGrid from '../Components/MealGrid/MealGrid';

export default function HomePage() {
  return <>
  <div className='bg-[#f4f2ee] sm:ml-64 p-4 overflow-hidden min-h-screen'>
    <div className='container py-8 px-4'>
      <CategoryTabs/>
    </div>

      <MealGrid/>

  </div>

  </>
    
  
}
