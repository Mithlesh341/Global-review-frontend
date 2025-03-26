// import "./reviewItems.css"

// import React, { useContext, useState } from 'react'

// //import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const reviewItems = ({id, productName,
              
//     productCategory,
//     rating,
//     reviewTitle,
//     review,
//     userName , image}) => {

//   // const [itemCount, setItemCount] = useState(0)
//   const { url} = useContext(StoreContext);


//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         {/* <img className='food-item-image' src={url+"/images/"+image} alt="" /> */}
      
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//             <p>{productName}</p>
//             {/* <img src={assets.rating_starts} alt="" /> */}
//         </div>
//         <p className="food-item-desc">{review}</p>
//         <p className="food-item-price">{userName}</p>
//       </div>
//     </div>
//   )
// }

// export default reviewItems


import React, { useEffect, useState } from "react";
import axios from "axios"; 

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5500/api/review/list") 
            .then((response) =>{
                console.log(response.data.data);
                setProducts(response.data.data);
                // if(products.length>0){
                // setLoading(false);
                // console.log(products);
                // }    
                if(products.length>0){ 
                console.log(products);
                setLoading(false);
                }   
                        
            })
            .catch((error) => console.error("Error fetching product:", error));
    }, []);
    // if (!products) return <p>Loading...</p>;

    return (
        <div >
            {loading && <h1>loading</h1>}
           {!loading && products && products[0].map((product)=>{
            <div>
            <h2>{product.productName}</h2>
            <p><strong>Category:</strong> {product.productCategory}</p>
            <p><strong>Rating:</strong>  {product.rating}/5</p>
            <p><strong>Review:</strong> {product.reviewTitle} - {product.review}</p>
            <p><strong>Reviewer:</strong> {product.userName}</p>
            </div>
     })}
          
            {/* <div>
            <h2>{products[0].productName}</h2>
            <p><strong>Category:</strong> {products[0].productCategory}</p>
            <p><strong>Rating:</strong>  {products[0].rating.$numberInt}/5</p>
            <p><strong>Review:</strong> {products[0].reviewTitle} - {product.review}</p>
            <p><strong>Reviewer:</strong> {products[0].userName}</p>
            </div>
  */}

            {/* <img 
                src={http://localhost:5000/uploads/${product.image}} 
                alt="Product" 
                style={{ width: "100%", borderRadius: "10px" }} 
            /> */}
        </div>
    );
};

export default ProductDetails;