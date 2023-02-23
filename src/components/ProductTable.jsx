import ProductRow from "./ProductRow"

function ProductsTable (props) {
    const {products} = props


   
        


    
    return(

        <div>
        <table class="center">

        <tr>

          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          
          
        </tr>
        
        {products.map((productIndividual)=>{
            return(
               <ProductRow key={productIndividual.id} products={productIndividual}></ProductRow>
            )
        })} 

        
      </table>

        </div>    
    )
  }



// {products.map((productIndividual)=>{
    // return(
    //     <ProductRow products={productIndividual}></ProductRow>
    //  )
    // ^ this lines is a map method, we doing this bc we create a single row multiple times in table 
    // we maped through product row and usung props line 47 passed row but individual product insted of full array of OBJ 


    // line 47, key?


  export default ProductsTable