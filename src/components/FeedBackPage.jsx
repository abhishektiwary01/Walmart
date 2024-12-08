import React, { useState } from 'react'
import "../styles/Feedback.css"
import Header from './Header'

const FeedBackPage = () => {
   // State to store the feedback
   const [feedback, setFeedback] = useState("");

   // Handle the form submission
   const handlesubmit = (e) => {
      e.preventDefault();  // Prevent page reload on form submission
      alert("Your feedback is submitted");

      // Clear the feedback text after submission
      setFeedback("");
   }

   // Handle text area change
   const handleChange = (e) => {
      setFeedback(e.target.value);
   }

   return (
      <>
         <Header />
         <div className='feedback-container-small'>
            <div className='feedback-small'>
               <div className='feedback-heading'>
                  <p>Your feedback matters! Help us improve the Walmart website</p>
               </div>
               <div className="form-container">
                  <h2>Enter Feedback</h2>
                  <form onSubmit={handlesubmit}>
                     <textarea 
                        value={feedback} 
                        onChange={handleChange}  // Update feedback state on change
                        placeholder="Type your feedback..." 
                        required 
                        className="feedback-textarea" 
                     />
                     <button className='button-feedback' type="submit">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default FeedBackPage
