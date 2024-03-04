import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        subject: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you would typically send the data to a server
        // After submitting, redirect to another page, e.g., thank you page
        // history.push('/thankyou');
    };

    return (
        <div className="container" style={{ marginTop: '50px', fontWeight: 'bold', color: 'white', backgroundImage: "url('help.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
            {/* Form and other HTML elements unchanged, just update the form element: */}
            <form onSubmit={handleSubmit}>
                {/* Inputs unchanged, just add value and onChange to each input */}
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'purple', borderColor: 'purple' }}>Submit</button>
            </form>
            <div className="text-center" style={{ marginTop: '20px' }}>
                <button onClick={() => history.push('/feedback')} className="btn btn-info">Leave Feedback</button>
            </div>
        </div>
    );
};

export default ContactUs;
