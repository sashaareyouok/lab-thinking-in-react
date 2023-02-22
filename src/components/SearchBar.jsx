
function SearchBar () {

    const [searchInput, setSearchInput] = useState(search)

    
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
    }

    return(
        <div>
         
        <h4>Search</h4>
        <input icon='search'
        placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)}
            />
          
        </div>    
    )
  }
  
  export default SearchBar