import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props)
    const { strArea, strMealThumb, strCategory, strMeal } = props.meal
    return (
        <div className='meal-container rounded-xl'>
            <div className='p-5'>
                <img className='rounded-xl mb-1' src={strMealThumb} alt="" />
                <h2 className='text-2xl font-semibold mb-3'>{strMeal}</h2>
                <h4 className='text-xl font-semibold'>Place: {strArea}</h4>
                <h4 className='text-xl font-semibold mb-5'>Category: {strCategory}</h4>
            </div>
            <button className='bg-[#FFE0B3] hover:bg-orange-500 ease-in-out duration-200 w-full h-12 btn-add'>Add to List</button>
        </div>
    );
};

export default Meal;