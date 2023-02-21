import { useState } from 'react';
import DataJson from "./../data.json"
import SearchBar from './SearchBar';
import ProductsTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(DataJson);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar></SearchBar>
        <ProductsTable products = {products}></ProductsTable>
      </div>    
  )
}

export default ProductsPage