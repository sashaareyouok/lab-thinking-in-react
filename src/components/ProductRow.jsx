import { useState } from 'react';
import DataJson from "./../data.json"


function ProductRow (props) {
    
    
    return(
        <tr>
      
          <td>{props.products.name}</td>
          <td>{props.products.price}</td>
          <td>{props.products.category}</td>
      
         
  
          
        </tr>    
    )
  }
  
  export default ProductRow