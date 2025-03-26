import './review.css';
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
function reviews() {

  // const [image, setImage] = useState(false);
  const [data, setData] = useState({
    productName:"",
    productCategory: "Others",
    rating:1,
  
    reviewTitle:"",
    
    review:"",
    // image:image,
    userName:"",
    image:''
  })

  const onChangeHandler=(e)=>
    {
       if(e.target.name==="rating")
       {
        setData({...data,[e.target.name]:Number(e.target.value)});
       }
       else if(e.target.name==="image")
       {
        setData({...data,[e.target.name]:e.target.files[0]});
       }
       else
       setData({...data,[e.target.name]:e.target.value});
      };
  // const onChangeHandler = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setData(data => ({...data, [name]:value}))
  // }
  const clickSubmit=async(e)=>
    {
       e.preventDefault();
       console.log(data);
    //    const formData = new FormData();
    //    formData.append("file", data.image);
    // //    console.log(data.image);
    //    console.log(formData);
    //    setData({...data,image:formData})
    //    let data={
    //         productName:productName,
    //         productCategory:productCategory,
    //         rating:rating,
    //         reviewTitle:reviewTitle,
    //         review:review,
    //         userName:userName,
    //         image:image
    //        } 
    const formData = new FormData();
    formData.append("image", data.image); // "file" matches backend multer setup
    formData.append("productName", data.productName);
    formData.append("productCategory", data.productCategory);
    formData.append("rating", data.rating);
    formData.append("reviewTitle", data.reviewTitle);
    formData.append("review", data.review);
    formData.append("userName", data.userName);
    // for (let [key, value] of formData.entries()) {
    //     console.log(${key}:, value);
    //   }
      const res=await axios.post("http://localhost:5500/api/review/add",formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Required for file uploads
      });
      if(res.status===200)
        {
            console.log("successfully submitted form");
            if(res.data.success){
              setData({
               
                     productName:"",
                      productCategory: "Others",
                      rating:1,
                      reviewTitle:"",
                      review:"",
                      userName:"",
                      image:''
              })
              toast.success(res.data.message)
           }
           else{
              toast.error(res.data.message);
           }
        } 
    }
  // const clickSubmit=async(event)=>
  // {
    
  //   // if(res)
  //   // {
  //   //   console.log("submitted");
  //   // }
  //   const formData = new FormData();
  //   formData.append("productName", data.productName)
  //   formData.append("productCategory", data.productCategory)
  //   formData.append("rating", Number(data.rating))
  //   formData.append("reviewTitle", data.reviewTitle)
  //   formData.append("review", data.review)
  //   formData.append("userName", data.userName)
  //   formData.append("image", image)

  //   const res = await axios.post(" http://localhost:5500/api/review/add",formData,{
  //     headers:{"Content-Type":"multipart/form-data"},
  //   });
  //   if(res.status===200)
  //   {
  //     console.log("submitted form successfully");
  //   }

    
  // };


  return (
    <>
    <div className="reviewbody">
     <div className="header">GLOBAL REVIEW</div>
    <div className="review-container">
        <h2>Write a Product Review</h2>
        <form onSubmit={clickSubmit} encType='multipart/form-data'>
            <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input onChange={onChangeHandler} value={data.productName} name='productName' type="text" id="product-name" placeholder="Enter product name" required/>
            </div>

            <div className="form-group">
                <label htmlFor="product-category">Product Category</label>
                <select onChange={onChangeHandler} name='productCategory' id="product-category" required>
                    <option value="">Select Category</option>
                    <option value="appliances">Appliances</option>
                    <option value="beauty">Beauty</option>
                    <option value="books">Books</option>
                    <option value="cars">Cars</option>
                    <option value="coffeemachine">Coffee Machines</option>
                    <option value="diet">Diet and Weight Loss Products</option>
                   
                    <option value="electronics">Electronics</option>
                   
                    <option value="fashion">Fashion</option>
                    <option value="footwear">Footwear</option>
                    <option value="furniture">Furniture</option>
                    <option value="homebuilders">Home Builders</option>
                    <option value="prams">Prams and Strollers</option>

                    <option value="sports">Sports</option>
                    <option value="tyres">Tyres</option>
                    <option value="vaccum">Vaccum Cleaners</option>
                    <option value="washing">Washing Machine</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label>Rating</label>
                <div className="rating">
                    <input onChange={onChangeHandler} type="radio" id="star5" name="rating" value="5"/><label for="star5">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star4" name="rating" value="4"/><label for="star4">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star3" name="rating" value="3"/><label for="star3">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star2" name="rating" value="2"/><label for="star2">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star1" name="rating" value="1"/><label for="star1">&#9733;</label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="review-title">Review Title</label>
                <input onChange={onChangeHandler} value={data.reviewTitle} name='reviewTitle' type="text" id="review-title" placeholder="Enter a short title"/>
            </div>

            <div className="form-group">
                <label htmlFor="review-text">Review</label>
                <textarea onChange={onChangeHandler} value={data.review} name='review' id="review-text" placeholder="Write your review here..." required></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="upload-image">Upload Image (Optional)</label>
                {/* <input type="file" name="image" /> */}
                <input onChange={onChangeHandler} type="file" id='image' name='image'/> 
            </div>

            <div className="form-group">
                <label htmlFor="username">Your Name (Optional)</label>
                <input onChange={onChangeHandler} value={data.userName} type="text" id="username" name='userName' placeholder="Enter your name"/>
            </div>
            <button type="submit" className="submit-btn">Submit Review</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default reviews


/*import './review.css';
import React, { useState } from 'react';

function Review() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    rating: '',
    reviewTitle: '',
    reviewText: '',
    username: '',
    image: null
  });

  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('rating', formData.rating);
    formDataToSend.append('reviewTitle', formData.reviewTitle);
    formDataToSend.append('reviewText', formData.reviewText);
    formDataToSend.append('username', formData.username);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await fetch('http://localhost:5500/api/reviews', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Review submitted successfully!');
        setFormData({
          productName: '',
          category: '',
          rating: '',
          reviewTitle: '',
          reviewText: '',
          username: '',
          image: null
        });
      } else {
        setMessage(result.message || 'Failed to submit review.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage('Error submitting review. Please try again.');
    }
  };

  return (
    <>
      <div className="reviewbody">
        <div className="header">GLOBAL REVIEW</div>
        <div className="review-container">
          <h2>Write a Product Review</h2>
          {message && <p className="message">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Product Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="appliances">Appliances</option>
                <option value="fashion">Fashion</option>
                <option value="beauty">Beauty</option>
                <option value="sports">Sports</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Rating</label>
              <div className="rating">
                {[5, 4, 3, 2, 1].map((num) => (
                  <React.Fragment key={num}>
                    <input
                      type="radio"
                      id={`star${num}`}
                      name="rating"
                      value={num}
                      onChange={handleChange}
                      checked={formData.rating === `${num}`}
                    />
                    <label htmlFor={`star${num}`}>&#9733;</label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reviewTitle">Review Title</label>
              <input
                type="text"
                id="reviewTitle"
                name="reviewTitle"
                value={formData.reviewTitle}
                onChange={handleChange}
                placeholder="Enter a short title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reviewText">Review</label>
              <textarea
                id="reviewText"
                name="reviewText"
                value={formData.reviewText}
                onChange={handleChange}
                placeholder="Write your review here..."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="image">Upload Image (Optional)</label>
              <input type="file" name="image" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="username">Your Name (Optional)</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <button type="submit" className="submit-btn">Submit Review</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Review;*/
