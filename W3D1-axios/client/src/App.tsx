import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/product-list';
import AddProduct from './components/add-product';
import productService from './apis/services/product.service';
import Product from './types/product';


function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      // const response = await axios.get(' http://localhost:8000/products');
      const response = await productService.getProducts()
      setProducts(response.data)
    }
    getProducts()
  }, [])

  const addNewProd = (prod: Product) => {
    setProducts([...products, prod])
  }


  return (
    <div className="container">
      <ProductList products={products} />
      <AddProduct onAddNewProd={addNewProd} />
    </div>
  );
}

export default App;
