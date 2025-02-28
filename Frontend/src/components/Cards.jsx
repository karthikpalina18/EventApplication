import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Cards({ item }) {
  const navigate = useNavigate(); // Initialize navigation

  const handleCheckout = () => {
    navigate(`/checkout/${item.id}`); // Navigate to Checkout page with item ID
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <button
                className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200"
                onClick={handleCheckout} // Call function on click
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
