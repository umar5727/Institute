import React from "react";

import TwoColumnHero from "../components/ToColumnHero";
import SmallCard from "../components/SmallCard";
import { Add, FeedbackContainer, SmallCardContainer, Tabs } from "../components";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    // Add more products as needed
    {
      id: 2,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 3,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 4,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 5,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 6,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 7,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 8,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
  ];
  return (
    <main className=" dark:bg-boot-dark ">
      {/* Home */}
      <TwoColumnHero />

      {/* <div className="flex flex-wrap justify-center mt-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div> */}

      <SmallCardContainer />
      <Tabs />
      <Add />
      <FeedbackContainer />
    </main>
  );
};

export default Home;
