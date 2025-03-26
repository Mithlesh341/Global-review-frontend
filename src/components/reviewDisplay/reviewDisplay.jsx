import './reviewDisplay.css';
import React, { useContext } from 'react'
import ReviewItems from '../reviewItems/reviewItems';
//import { StoreContext } from '../../context/StoreContext'
//import FoodItems from '../FoodItems/FoodItems'

const ReviewDisplay = () => {

//    const {reviewlist} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Know Your Product Reviews</h2>
      <div className="food-display-list">
        {reviewlist.map((item, index)=>{
              
             <ReviewItems key={index} id={item._id} 
                productName={item.productName}
              
                productCategory={ item.productCategory}
                rating={item.rating}
                reviewTitle= {item.reviewTitle}
                review = { item.review}
                userName= {item.userName}
                image={item.image}/>
              
             
        })}
      </div> 
      
      {/* <div className='food-display-list'>
        <ReviewItems/>
      </div> */}
      
    </div>
  )
}

export default ReviewDisplay
