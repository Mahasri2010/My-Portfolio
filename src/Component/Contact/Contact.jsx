import React from 'react'
import './Contact.css'
import location from'../../assets/location.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6d3a2b30-971f-43a6-9c0e-0214b4eadf33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }





  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            {/* <img src="" alt="design" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take a new projects, so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src=" "  alt="" /> <p>maheesri123@gmail.com</p>
                       {/* <a href="https://iconscout.com/icons/email" class="text-underline font-size-sm" target="_blank">Email</a> by <a href="https://iconscout.com/contributors/brent-jackson" class="text-underline font-size-sm" target="_blank">Brent Jackson</a> */}
                    </div>
                    <div className="contact-detail">
                        <img src='' alt="" /> <p>8122693055</p>
                    </div>
                    <div className="contact-detail">
                    {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#ffffff",}} /> */} <p> Sathyamangalam , Erode. </p> 
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='email' />
                <label htmlFor="">Write your Message here</label>
                <textarea name="message" rows="8" placeholder='Enter your Message' ></textarea>
                <button className='contact-submit' type='submit'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact