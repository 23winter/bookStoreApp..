import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-72 h-[400px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border rounded-lg">
        <figure className="h-[60%] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body h-[40%] p-4 overflow-hidden flex flex-col justify-between">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-auto">
            <div className="badge badge-outline text-gray-800 dark:text-gray-300">
              ${item.price}
            </div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-2 border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
