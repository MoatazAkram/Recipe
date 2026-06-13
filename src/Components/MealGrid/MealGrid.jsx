import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryTabs from "../CategoryTabs/CategoryTabs";

export default function MealGrid() {
  const [meals, setMeals] = useState([]);
  const [isError, setisError] = useState("")
  const {categoryName} = useParams();


  async function getMeals() {
    try {
      let url;
    if(categoryName){
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    }else{
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    }
    const { data } = await axios.get(
      url
    );
    setMeals(data.meals);
    } catch (error) {
      setisError(error.message)
    }
    
  }

  useEffect(() => {
    getMeals();
  }, [categoryName]);

  if(isError){
    return <h1 className="text-2xl text-center text-light py-5 bg-red-500">{isError}</h1>
  }

  return (
    <>
      <div className="meals mt-24 mb-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
        {meals.map((meal) => {
          return (
            <div
              key={meal.idMeal}
              className="meal py-5 bg-[#fefefe] text-center hover:scale-105 transition-all duration-300 rounded-[35px] hover:shadow-xl group"
            >
              <img
                className="w-60 sm:w-80 md:w-64 lg:w-44 mx-auto h-auto rounded-full group-hover:rotate-[360deg] drop-shadow-xl duration-700 -translate-y-10 transition-all shadow-2xl"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <h3 className="font-semibold text-xl mb-2 lg:mb-0">{meal.strMeal.split(" ").slice(0,2).join(" ")}</h3>
              {meal.strArea ? (
                <h5 className="text-[#059669] flex justify-center items-center gap-2 mb-5 lg:mb-0">
                  <i className="fa-solid fa-earth-africa"></i>
                  {meal.strArea}
                </h5>
              ) : (
                ""
              )}
                <Link className="bg-[#21ba75] px-8 lg:px-10 py-2 lg:inline-flex lg:flex-col text-light font-semibold rounded-full mt-4 hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer" to={`/mealdetails/${meal.idMeal}`}><span> View </span> Recipe</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
