import React, { useContext,useState } from "react";
import "./section.css";
// import StoreContextProvider from "../../../context/StoreContext"
// import CategoryDisplay from "./categoryDisplay"
import image from "../../../assets/bg.jpg"
import cars from "../../../assets/cars.jpg"
import tyres from "../../../assets/tyres.jpg"
import washingmachine from "../../../assets/washingmachine.jpg"
import stroller from "../../../assets/st.jpg"
import dietproducts from "../../../assets/gym.jpg"
import vacuumcleaner from "../../../assets/vc.jpg"
import homebuilder from "../../../assets/homebuilders.jpg"

import { toast } from "react-toastify";

import cm from "../../../assets/coffeemachine.jpeg"
import { StoreContext } from "../../../context/StoreContext";
import { useNavigate } from "react-router-dom";


const section = () => {
    const {reviewlist, token}=useContext(StoreContext);
    let nav=useNavigate();
    let arr;
    const [results,setResults]=useState([]);
     const [search,setSearch]=useState('');
     const onChangeSubmit=(e)=>
        {
            let newVal=e.target.value;
            setSearch(newVal);
           arr= reviewlist.filter((element,idx)=>{
            return (element.productName).includes(newVal);
        });
           setResults(arr);
           console.log(results);
           
        }
         const handleClick=(e)=>
         {
         e.preventDefault();
         console.log(results);
         nav('/searchresults',{state:{searchresults:results}});
         };
   return (
<>
<section className="all">
<section className="hero" style={{ backgroundImage: `url(${image})` }}>
        <h1>Know better, choose better.</h1>
        <p>Reviews by people like you.</p>
        <div className="search-bar">
            <input type="text" onChange={onChangeSubmit} placeholder="What are you looking for?" />
            <button onClick={handleClick}>Search</button>
            <div style={{borderRadius:'10px', marginTop:40 ,textAlign:'left',width:'70%',paddingLeft:10, maxWidth:'600px',position:'absolute',color:'black', background:' linear-gradient(135deg,#0056b3 ,#003366 )',textDecoration:'none',listStyleType:'none'}}>
            {results.length>=1 && results.map((element,index)=>(
                 <li style={{paddingTop:2}}><a href="/category" style={{textDecoration:'none',color:'white'}}>{index<10 && element.productName}</a></li>
                 ))}
             </div>
        </div>
    </section>

    <div className="box"></div>



<section className="review-section">
   <h2 style={{textAlign:"center",paddingBottom:15}} >Your opinion matters</h2>
   <p>GlobalReview.com is a community of consumers helping each other make better purchasing decisions.</p>
   {token?<a href="/review" className="review-button">Write a review</a>:<a className="review-button" onClick={(e)=> toast.warn("To write a review Login First")
    
   }>Login to Review</a>}
   
</section>
<div className="box"></div>

<section className="categories-section" >
        <h2 style={{textAlign:"center",paddingBottom:15}} >Popular Categories</h2>
        <p style={{color:'black'}}>Browse our most popular categories</p>

        <div className="category-grid" >
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${cars})`,opacity:0.75}}>
                <h3>Cars</h3>
                <p>29,340 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{backgroundImage:`url(${cm})`,opacity:0.75}}>
                <h3>Coffee Machines</h3>
                <p>17,010 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${dietproducts})`,opacity:0.75}} >
                <h3>Diet & Weight Loss Products</h3>
                <p>9,002 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${homebuilder})`,opacity:0.75}}>
                <h3>Home Builders</h3>
                <p>88,862 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${stroller})`,opacity:0.75}} >
                <h3>Prams & Strollers</h3>
                <p>31,414 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${tyres})`,opacity:0.75}}  >
                <h3>Tyres</h3>
                <p>8,216 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${vacuumcleaner})`,opacity:0.75}} >
                <h3>Vacuum Cleaners</h3>
                <p>36,036 reviews</p>
            </div></a>
           <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${washingmachine})`,opacity:0.75}}>
                <h3>Washing Machines</h3>
                <p>24,870 reviews</p>
            </div></a>
        </div>
    </section>

    <div className="box"></div>
        <section className="reviews-section">
        <h2 style={{textAlign:"center",paddingBottom:15}} >Featured Reviews</h2>
        <p>Browse some of our latest reviews</p>

        <div className="review-grid">
       
         {reviewlist.toReversed().map((element,index)=>(
            <>
           {index<3  && <div className="review-card">
                <h3>{element.productName}</h3>
                <div className="reviewer-info">
                    <img src={`http://localhost:5500/uploads/${element.image}`} style={{   width: 160,
    height: 160 , borderRadius: '10px'}} alt="User Image"/>
                    <div>
                        <strong>{element.reviewTitle}</strong> <span>{element.userName}</span>
                        <div className="stars">{element.rating}★</div>
                        <span className="time">{new Date(element.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</span>
                    </div> 
                </div>
                <p>{element.review}</p>
            </div> 
 } </>
         ))}
          {/* <section className="reviews-section">
        <h2 style={{textAlign:"center",paddingBottom:15}} >Search Results</h2>
        <div className="review-grid"> 
         {searchresults.map((element,index)=>(
           <div className="review-card">
                <h3>{element.productName}</h3>
                <div className="reviewer-info">
                    <img src={`http://localhost:5500/uploads/${element.image}`} style={{   width: 160,
    height: 160 , borderRadius: '10px'}}  alt="User Image"/>
                    <div>
                        <strong>{element.reviewTitle}</strong> <span>{element.userName}</span>
                        <div className="stars">{element.rating}★</div>
                        <span className="time">{new Date(element.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</span>

                    </div> 
                </div>
                <p>{element.review}</p>
            </div> 
         ))}
         </div>
         </section>
           */}

        
        </div>
    </section>
    </section>
 <footer>
    <div className="footer-bottom">
        <p>© 2025 GlobalReview.com.Pty. Ltd. All Rights Reserved.</p>
        <p>General disclaimer: All third-party trademarks, images, and copyrights on this page are used for the purpose of comparative advertising, criticism, or review. 
            This is a public forum presenting user opinions on selected products and businesses, and as such, the views expressed do not reflect the opinion of ProductReview.com.au. 
            Further details in the <a href="#">disclaimer</a>.
        </p>
    </div>
</footer>
</>
   );
};

export default section;
