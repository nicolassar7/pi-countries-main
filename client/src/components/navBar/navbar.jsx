import SearchBar from '../searchBar/searchBar';
import Sort from '../sort/sort'
import './navBar.css'


function NavBar({setResults, setPage}){
    return(
        <div className='nav'>
            <SearchBar setResults={setResults} setPage={setPage} />
            <Sort setPage={setPage} />
        </div>
    )
}

export default NavBar;