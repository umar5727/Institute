import React from 'react'
import Profile from '../components/Profile'
import {Link} from "react-router-dom"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook } from '@fortawesome/free-solid-svg-icons'
// import Button from '../components/Button'
import {Button, Header, Tabs, ThemeToggle} from '../components'
import ProductCard from '../components/ProductCard'
import TwoColumnHero from '../components/ToColumnHero'
import SmallCard from '../components/SmallCard'
const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },
    // Add more products as needed
    {
      id: 2,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },
    {
      id: 3,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },
    {
      id: 4,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },
    {
      id: 5,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },{
      id: 6,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },{
      id: 7,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },{
      id: 8,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category 1',
      price: 19.99,
      image: 'https://placekitten.com/300/200', // Replace with your product image URL
    },
  ];
  return (
    <div className=' dark:bg-boot-dark overflow-hidden'>
      {/* Home */}
    <TwoColumnHero />
    
    {/* <div className="flex flex-wrap justify-center mt-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div> */}

    <div className='flex flex-wrap '>
      <SmallCard bg='bg-primary-yellow-light'imgColor='text-primary-yellow'/>
    </div>
    </div>
  )
}

export default Home