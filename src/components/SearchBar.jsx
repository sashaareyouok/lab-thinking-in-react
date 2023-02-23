
function SearchBar (props) {

    return(
        <div>
         
        <label htmlFor="">
         
        <input type='text'
        className="Bar"
        placeholder='Search...'
        onChange={(event)=>props.handleSearch(event.target.value)}

        
            />
            </label>
        </div>    
    )
  }
  
  export default SearchBar


//   in order to have a function that modifise a use state we need to(so we can use a search bar)
//  we go to product page and create function handle search 
//  and do if statement there 
//  other comments on product page >>>>


// 2part back to this page 
// onChange={(event)=>console.log(event.target.value)}
//  by this step we now can see what user is typing on a console, so we see it
// but all i want to do is plug it in my userInput function 
// for that we call handle search function and passing it with props 
// anytime now if input changes it is gonna call handle function and plug it with help of event.target parametr 
// it is pluging to our function on product page with if/else conditions by checking conditions and resseting the siutable one 