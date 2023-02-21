import ProductRow from "./ProductRow"

function ProductsTable (props) {
    const {products} = props
    
    return(
        <div>
        <table class="center">

        <tr>

          <th>Name</th>
          <th>Price</th>
          <th>category</th>
          
        </tr>
        
        {products.map((productIndividual)=>{
            return(
               <ProductRow products={productIndividual}></ProductRow>
            )
        })}
        
      
      
        
        
     
     
        
      </table>

        </div>    
    )
  }
  
  export default ProductsTable