import './HomePage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        console.log('Products fetched:', response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <title>E-commerce project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}