import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

export default function MealDetailsCard() {

  const [mealDetails, setMealDetails] = useState(null)
  const [isError, setisError] = useState("")
  const {mealId} = useParams()


  useEffect(() => {
    getMealDetails() 
  
  }, [mealId])

  async function getMealDetails(){
   try {
     let url;
    if(!mealId){
      return;
    }
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    setMealDetails(data.meals[0])
   } catch (error) {
    setisError(error.message)
   }
  }

  function getIngredients(meal){
    const ingredients = []
   for(let i =1; i<=9; i++){
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`]

    if(ingredient?.trim()){
      ingredients.push({
        ingredient,
        measure,
      });
    }
   }
   return ingredients;
  }

  if(isError){
    return <h1 className="text-2xl text-center text-light py-5 bg-red-500">{isError}</h1>
  }

  if(!mealDetails){
    return   <div className="flex justify-center items-center min-h-screen">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  }



  return <>
  <div className="container p-4">
    <div className='flex gap-4 flex-col lg:flex-row'>
      <div className='lg:w-2/3'>
      <h1 className='font-semibold text-5xl mb-2 md:mb-4 font-[pacifico]'>{mealDetails.strMeal}</h1>
        <div className='grid gap-4 items-stretch lg:grid-cols-2'>
          <div className="flex flex-col items-center">
            <img className='w-100 lg:w-80 rounded-2xl mb-3' src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
          <ul className='flex mt-2 gap-4 content-center text-light font-semibold'>
            <li  className='py-2 px-4 bg-[#dc2626] rounded-md'><a target='_blank' rel="noopener noreferrer" className='flex content-center items-center gap-2' href={mealDetails.strYoutube}><i className="fa-brands fa-youtube"></i>youtube</a></li>
            <li className='py-2 px-4 bg-[#21ba75] rounded-md'><a target='_blank' rel="noopener noreferrer" className='flex content-center items-center gap-2' href={mealDetails.strSource}><i className="fa-solid fa-globe"></i>source</a></li>
          </ul>
          </div>
          <p className='font-semibold'>{mealDetails.strInstructions}</p>
        </div>
      </div>
      <div className='lg:w-1/3 p-4'>
        <div className='bg-[#ffffff] rounded-xl p-4'>
          <h3 className='font-semibold text-2xl p-2 mb-3 border-b-4 border-b-[#e5e7eb]'>Ingredients</h3>
         {getIngredients(mealDetails).map((item, index)=>{
          return <div className='flex justify-between items-center text-sm font-semibold p-2 last-of-type:border-b-0 border-b-2 border-b-[#e5e7eb]' key={index}>
            <span>{item.ingredient}:</span>
            <span>{item.measure}</span>
          </div>
         })}
        </div>
      </div>
    </div>
  </div>
  </>
}
