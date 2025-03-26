// import React from 'react'
// import './category.css'

// const category = () => {

   
//   return (
//     <div>
       
//     </div>
//   )
// }

// export default category

import React, { useEffect } from 'react'
import './category.css'
import ReviewDisplay from '../../reviewDisplay/reviewDisplay'
import ReviewItems from '../../reviewItems/reviewItems.jsx'

const category = ({productName,rating,id,review,reviewTitle}) => {
  useEffect(()=>
  {

  },[])
  return (
    <>
    <div className="categorybody">
    <section>
    <div className="sidebar">
        <h2>Categories</h2>
        <ul>
            <li><a>Appliances</a></li>
            <li><a>Electronics</a></li>
            <li><a>Mobiles</a></li>
            <li><a>Furniture</a></li>
          
            <li><a>Footwear</a></li>
            <li><a>Books</a></li>
            <li><a>Beauty</a></li>
            <li><a>Sports</a></li>
            <li><a>Cars</a></li>
            <li><a>Coffee Machines</a></li>
            <li><a>Diet and Weight Loss Products</a></li>
            <li><a>Home Builders</a></li>
            <li><a>Prams and Strollers</a></li>
            <li><a>Tyres</a></li>
            <li><a>Vaccum Cleaners</a></li>
            <li><a>Washing Machine</a></li>
        </ul>
    </div>
    <div className="content">
        <h1>Top Products</h1>
        {/* <div className="top-products" id="top-products"></div>
        <div className="category-reviews" id="reviews-section">
            <h2>Category Reviews</h2>
            <button onclick="sortCategoryReviews()">Sort Reviews by Rating</button>
            <div id="reviews-container"></div>
        </div> */}
      {/* <ReviewDisplay/> */}
        
    </div>
    </section>
    </div>
    </>
  )
}

export default category

