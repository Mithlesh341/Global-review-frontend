

// import React, { useEffect } from 'react'
// import './category.css'
// import ReviewDisplay from '../../reviewDisplay/reviewDisplay'
// //import ReviewItems from '../../reviewItems/reviewItems.jsx'


// const category = ({productName,rating,id,review,reviewTitle}) => {
 
//   return (
//     <>
//     <div className="categorybody">
//     <section>
//     <div className="sidebar">
//         <h2>Categories</h2>
//         <ul>
//             <li><a>Appliances</a></li>
//             <li><a>Electronics</a></li>
//             <li><a>Mobiles</a></li>
//             <li><a>Furniture</a></li>
          
//             <li><a>Footwear</a></li>
//             <li><a>Books</a></li>
//             <li><a>Beauty</a></li>
//             <li><a>Sports</a></li>
//             <li><a>Cars</a></li>
//             <li><a>Coffee Machines</a></li>
//             <li><a>Diet and Weight Loss Products</a></li>
//             <li><a>Home Builders</a></li>
//             <li><a>Prams and Strollers</a></li>
//             <li><a>Tyres</a></li>
//             <li><a>Vaccum Cleaners</a></li>
//             <li><a>Washing Machine</a></li>
//         </ul>
//     </div>
//     <div className="content">
//         {/* <h1>Top Products</h1>
//         <div className="top-products" id="top-products"></div>
//         <div className="category-reviews" id="reviews-section">
//             <h2>Category Reviews</h2>
//             <button onclick="sortCategoryReviews()">Sort Reviews by Rating</button>
//             <div id="reviews-container"></div>
//         </div> */}
//        <ReviewDisplay/>
        
//     </div>
//     </section>
//     </div>
//     </>
//   )
// }

// export default category

//NEW ONE
// import React, { useState } from 'react';
// import './category.css';
// import ReviewDisplay from '../../reviewDisplay/reviewDisplay';

// const Category = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const categories = [
//     "All", "Appliances", "Electronics", "Mobiles", "Furniture",
//     "Footwear", "Books", "Beauty", "Sports", "Cars","Fashion",
//     "CoffeeMachines", "Diet", "HomeBuilders",
//     "Prams", "Tyres", "Vaccum", "WashingMachine","Others"
//   ];

//   return (
//     <div className="categorybody">
//       <section>
//         <div className="sidebar">
//           <h2>Categories</h2>
//           <ul>
//             {categories.map((category, index) => (
//               <li key={index}>
//                 <a 
//                   onClick={() => handleCategoryClick(category)} 
//                   className={selectedCategory === category ? "active-category" : ""}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div>{category}</div>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="content">
//           <ReviewDisplay selectedCategory={selectedCategory} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Category;




import React, { useState } from 'react';
import './category.css';
import ReviewDisplay from '../../reviewDisplay/reviewDisplay';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortByRating, setSortByRating] = useState(null); // null = no sorting, "asc" = ascending, "desc" = descending

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (order) => {
    setSortByRating(order);
  };

  const categories = [
    "All", "Appliances", "Electronics", "Mobiles", "Furniture",
    "Footwear", "Books", "Beauty", "Sports", "Cars","Fashion",
    "CoffeeMachines", "Diet", "HomeBuilders",
    "Prams", "Tyres", "Vaccum", "WashingMachine","Others"
  ];

  return (
    <div className="categorybody">
      <section>
        <div className="sidebar">
          <h2>Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a 
                  onClick={() => handleCategoryClick(category)} 
                  className={selectedCategory === category ? "active-category" : ""}
                  style={{ cursor: "pointer" }}
                >
                  <div>{category}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="content">
          <div className="sort-options">
            <label>Sort by Rating: </label>
            <button onClick={() => handleSortChange("desc")} style={{marginRight:10,marginTop:10}}>High to Low</button>
            <button onClick={() => handleSortChange("asc")} style={{marginRight:10,marginTop:10}}>Low to High</button>
          </div>
          <ReviewDisplay selectedCategory={selectedCategory} sortByRating={sortByRating} />
        </div>
      </section>
    </div>
  );
};

export default Category;




// import React, { useState } from 'react';
// import './category.css';
// import ReviewDisplay from '../../reviewDisplay/reviewDisplay';

// const Category = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const categories = [
//     "All", "Appliances", "Electronics", "Mobiles", "Furniture",
//     "Footwear", "Books", "Beauty", "Sports", "Cars",
//     "Coffee Machines", "Diet and Weight Loss Products", "Home Builders",
//     "Prams and Strollers", "Tyres", "Vacuum Cleaners", "Washing Machine","others"
//   ];

//   return (
//     <div className="categorybody">
//       <section>
//         <div className="sidebar">
//           <h2>Categories</h2>
//           <ul>
//             {categories.map((category, index) => (
//               <li key={index}>
//                 <a 
//                   onClick={() => handleCategoryClick(category)} 
//                   className={selectedCategory === category ? "active-category" : ""}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {category}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="content">
//           <ReviewDisplay selectedCategory={selectedCategory} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Category;
