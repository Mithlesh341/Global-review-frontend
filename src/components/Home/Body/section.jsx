import React from "react";
import "./section.css";

import image from "../../../assets/bg.jpg"
import cars from "../../../assets/cars.jpg"
import tyres from "../../../assets/tyres.jpg"
import washingmachine from "../../../assets/washingmachine.jpg"
import stroller from "../../../assets/st.jpg"
import dietproducts from "../../../assets/gym.jpg"
import vacuumcleaner from "../../../assets/vc.jpg"
import homebuilder from "../../../assets/homebuilders.jpg"

import cm from "../../../assets/coffeemachine.jpeg"


const section = () => {
   return (
<>
<section className="all">
<section className="hero" style={{ backgroundImage: `url(${image})` }}>
        <h1>Know better, choose better.</h1>
        <p>Reviews by people like you.</p>
        <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
            <button>Search</button>
        </div>
    </section>

    <div className="box"></div>



<section className="review-section">
   <h2 style={{textAlign:"center",paddingBottom:15}} >Your opinion matters</h2>
   <p>GlobalReview.com is a community of consumers helping each other make better purchasing decisions.</p>

   <a href="/review" className="review-button">Write a review</a>
</section>
<div className="box"></div>

<section className="categories-section">
        <h2 style={{textAlign:"center",paddingBottom:15}} >Popular Categories</h2>
        <p style={{color:'black'}}>Browse our most popular categories</p>

        <div className="category-grid">
            <div className="category-item" style={{ backgroundImage: `url(${cars})`,opacity:0.75}}>
                <h3>Cars</h3>
                <p>29,340 reviews</p>
            </div>
            <div className="category-item" style={{backgroundImage:`url(${cm})`,opacity:0.75}}>
                <h3>Coffee Machines</h3>
                <p>17,010 reviews</p>
            </div>
            <div className="category-item" style={{ backgroundImage: `url(${dietproducts})`,opacity:0.75}} >
                <h3>Diet & Weight Loss Products</h3>
                <p>9,002 reviews</p>
            </div>
            <div className="category-item" style={{ backgroundImage: `url(${homebuilder})`,opacity:0.75}}>
                <h3>Home Builders</h3>
                <p>88,862 reviews</p>
            </div>
            <div className="category-item" style={{ backgroundImage: `url(${stroller})`,opacity:0.75}} >
                <h3>Prams & Strollers</h3>
                <p>31,414 reviews</p>
            </div>
            <div className="category-item" style={{ backgroundImage: `url(${tyres})`,opacity:0.75}}  >
                <h3>Tyres</h3>
                <p>8,216 reviews</p>
            </div>
            <div className="category-item" style={{ backgroundImage: `url(${vacuumcleaner})`,opacity:0.75}} >
                <h3>Vacuum Cleaners</h3>
                <p>36,036 reviews</p>
            </div>
            <div className="category-item" style={{ backgroundImage: `url(${washingmachine})`,opacity:0.75}}>
                <h3>Washing Machines</h3>
                <p>24,870 reviews</p>
            </div>
        </div>
    </section>

    <div className="box"></div>
 
      <section className="reviews-section">
        <h2 style={{textAlign:"center",paddingBottom:15}} >Featured Reviews</h2>
        <p>Browse some of our latest reviews-Sample Reviews</p>

        <div className="review-grid">
       
            <div className="review-card">
                <h3>Arise Solar</h3>
                <div className="reviewer-info">
                    <img src="" alt="User Image"/>
                    <div>
                        <strong>Jeremy B.</strong> <span>South East Queensland, QLD</span>
                        <div className="stars">★★★★★</div>
                        <span className="time">1h ago</span>
                    </div> 
                </div>
                <p>Cody provided great customer service and acted promptly to resolve the issue with my solar inverter.</p>
            </div>

            <div className="review-card">
                <h3>Kmart Online Store</h3>
                <div className="reviewer-info">
                    <img src="images/user2.jpg" alt="User Image"/>
                    <div>
                        <strong>Janine C.</strong> <span>Perth, WA</span>
                        <div className="stars">★☆☆☆☆</div>
                        <span className="time">1h ago</span>
                    </div>
                </div>
                <p>I ordered clothing online which was sourced from different stores with all items except for one shirt coming from one store...</p>
            </div>

          
            <div className="review-card">
                <h3>Snooze VIC, Springvale</h3>
                <div className="reviewer-info">
                    <img src="images/user3.jpg" alt="User Image"/>
                    <div>
                        <strong>Jeannine</strong>
                        <div className="stars">★★★★★</div>
                        <span className="time">1h ago</span>
                    </div>
                </div>
                <p>Julia was the reason I went to this store and purchased my bed, mattress, bedside table and mattress protector...</p>
            </div>
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
