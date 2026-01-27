import './HomePage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      console.log('HomePage products loaded:', response.data.length);
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>E-commerce project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}