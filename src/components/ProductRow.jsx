

function ProductRow (props) {
    
    // console.log (props.products) 
    // just  to check that we passing 
    
    return(
        <tr>
      
          <td className={props.products.inStock ? "" : "outOfStock"}>{props.products.name}</td>
          <td >{props.products.price}</td>
          <td>{props.products.category}</td>
          
          
      
         
  
          
        </tr>    
    )
  }
  
  export default ProductRow

//   to color InStock products we doing conditional rendering by 
// 1. giving a class name to product lines <td>
// if they have instock it should have class name 
// if not in stock will have class name "outofstock"
// 2.props.products.inStock checking that product in stock - if so, then I will do >
// that (? "" : ) this means (if this is true than this will happen:) than
// I add this (outOfStock) which means ELSE 