import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function ContactUs () {
    return (
        <div className="container">
            <div className="text-center">
                <h1>Contact Us</h1>
                <p></p>
                <h4>Need Help?</h4>
                <h4>Contact customer support through email or telephone!</h4>
                <h5>Phone: 1-888-789-6642</h5>
                <h5>Email: customersupport@techtribe.com</h5>
            </div>

            <br />

            <form>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="form-control" id="fname" name="firstname" placeholder="Your name.." />
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lastname" placeholder="Your last name.." />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Number" />
                </div>

                <div className="form-group">
                    <label htmlFor="subject1">Subject Topic</label>
                    <input type="text" className="form-control" id="subject1" name="phone" placeholder="Subject Topic" />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <textarea className="form-control" id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary purple-btn">Submit</button>
            </form>
        </div>
    );
}