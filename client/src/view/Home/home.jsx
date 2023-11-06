import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions"
import Cards from "../../components/cards/cards"
import NavBar from '../../components/navBar/navbar';
import './home.css'
import Pagination from '../../components/pagination/pagination';


function Home () {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const [results, setResults] = useState([])
    const [page, setPage] = useState(0)
    const PER_PAGE = 10
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const handlePage = (page) => {
        setPage(page);
    }

    const paginatedCountries = searchResults.length > 0 ? searchResults.slice(page * PER_PAGE, (page + 1) * PER_PAGE) : countries.slice(page * PER_PAGE, (page + 1) * PER_PAGE)
    return (
        <section className='layout'>
            <div className="sidebar">
                <NavBar setResults={setResults} setPage={setPage}/>
            </div>
            <div className="body">
                <Cards countries={results.length > 0 ? results: paginatedCountries} />
            </div>
            <div className ="footer">
                <Pagination
                    page={page} 
                    perpage={PER_PAGE} 
                    total={searchResults.length > 0 ? searchResults.length : countries.length}
                    handlePage={handlePage}
                    setPage={setPage}
                />
            </div>
        </section>
    )
}

export default Home;