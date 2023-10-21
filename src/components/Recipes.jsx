import React, { useEffect, useState } from 'react'
import axios from "axios"


export default function Recipes(props) {
  async function getMeals(){
    const data=  await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
    
    const mealInfo=data.data.meals
    setMeal(mealInfo)
    console.log(mealInfo)
  }

  useEffect(() => {
    getMeals()
  }, [])
   const[meals,setMeal] =useState(null);
   const [showMore, setShowMore] = useState(false);
   

    return (
        <>
        {meals===null?
        <div className=' vh-100 d-flex justify-content-center align-items-center' style={{background:`#5841251f`}}>
        <i className='fa-solid fa-spinner fa-spin text-white fa-7x'  style={{color:`#C98A40`}} ></i>
        </div>:
           <div className="recipes">
        <h1 style={{color:`#C98A40`,fontSize:`100px`,fontWeight:`800`}} className='text-center pt-3'>RECIPES</h1>
        <div className='container row  m-auto'>
        {meals.slice(0, showMore ? meals.length : 3).map(function (meal){
            return <>
            <div className="col-md-4 p-5" key={meal.idMeal}>
              <div className='rounded-2 '>
                 <img src={meal.strMealThumb} alt="" className='w-100' />
                 <h3 style={{color:`#C98A40`}}>{meal.strMeal}</h3>
                 <p style={{color:`#333333`}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quam corrupti beatae necessitatibus iure sunt ad quisquam est repellendus consectetur harum quis debitis eius enim?</p>
              </div>
          </div>
            </>
          })}
          
        </div>
        <div className='text-center pb-4'>
          <button
            className="m-auto"
            style={{
              width: `150px`,
              height: `40px`,
              background: `#FDBA10`,
              borderRadius: `30px`,
              color: `white`,
              border: `none`,
              fontWeight: `bold`,
            }}
            onClick={() => setShowMore(!showMore)}
            >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
           </div>
        }
          
        </>
    )
}
 