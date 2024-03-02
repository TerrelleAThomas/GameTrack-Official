import React from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assuming Bootstrap is installed via npm


export default function NotAuthorizedPage () {
    return (
        <>
            <style>{`
        body {
            background-image: url('Authorized.jpg');
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
            color: #000; /* Set text color to black */
        }
        .not-authorized-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
            border: 1px solid #dee2e6;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            color: #000; /* Ensure text inside the container is also black */
        }
        .not-authorized-header, .btn {
            color: #000; /* Set header and button text to black */
        }
        .btn-primary {
            border-color: #000; /* Button border color to black for consistency */
        }
        .btn-primary:hover {
            background-color: #000; /* Button background color on hover */
            color: #fff; /* Text color on hover */
        }
      `}</style>
            <div className="not-authorized-container text-center">
                <h1 className="not-authorized-header">403 - Not Authorized</h1>
                <p>You do not have permission to access this page.</p>
                {/* Replace href with your routing logic if using React Router or similar */}
                <a href="/" className="btn btn-primary">Go Home</a>
            </div>
        </>
    );
}
