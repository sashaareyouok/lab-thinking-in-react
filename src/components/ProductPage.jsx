import { useState } from 'react';
import DataJson from "./../data.json"
import SearchBar from './SearchBar';
import ProductsTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(DataJson); // Data jason is all products here and array of objects
  

function handleSearch (userInput) {

if (!userInput) {
    setProducts(DataJson)
}

else {
    const filterProducts = DataJson.filter((productIndividual)=>{
        return productIndividual.name.toLowerCase().includes(userInput.toLowerCase)
    })

    setProducts(filterProducts)

}

// 1st if is - if user did not put anything so i want to set a state to original value, original value is json data 
// 2nd else if more complex- we need to do filter json data, so do not use product here so we do not modify state >>
// we doing product individual + name + lower case as JS as case sensetive + includes ( we checking userInput + to lower case again)
// we doing user input lower case and checking that is matching product individual as we filter through it
// we need to set state one more time as final bc state still on a page, so we are resetting it one more time 
// we doing it inside else as it retaining to else condition, and if is using normal state 
// now we need to use handle serch function, pass it in return section
// so as we lifted state to a parent component it easy for us to modify it and pass to other compoinents 
// now we passing function as a prop in searchbar component in return section 
// back to search bar

// include method is checking do i have user input inside my product individual

}


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <br></br>
  <ProductsTable products = {products}></ProductsTable> 
      </div>    
  )
}

// <ProductsTable products = {products}></ProductsTable> , here i am passing state of products = prop, (value of products as a prop to) to connect Table to Row and pass products

export default ProductsPage