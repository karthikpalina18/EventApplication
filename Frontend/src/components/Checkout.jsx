import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";  // Import Navbar

function Checkout() {
  const { id } = useParams(); // Get item ID from URL

  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <div className="mt-20 flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Checkout Page</h1>
          <p>Item Name: {id}</p>
          <p>Successfully Registered</p>
          <p>Our Team will reach out to you later</p>
          <a
            href="https://forms.gle/Ntn5Yy4aB2ZDbF3i6"
            className="text-pink-500 font-bold underline"
          >
            Fill this form
          </a>
        </div>
      </div>
    </>
  );
}

export default Checkout;
