// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden shadow-lg rounded-lg">
      <img
        className="w-full h-48 object-cover object-center"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.category}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-700 text-base font-bold">
          ${product.price}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
