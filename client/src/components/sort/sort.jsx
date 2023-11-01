import { useDispatch, useSelector } from "react-redux";
import { originalOrder, sortCountry, sortPopulation} from "../../redux/actions";
import './sort.css'

function Sort ({setPage}) {
    const sortBy = useSelector((state) => state.countries)
    const dispatch = useDispatch();

    const handleSort = (e) => {
        dispatch(sortCountry(e.target.name))
    }
    const handleOrder = () => {
        dispatch(originalOrder());
      };

    const handleAsc = () => {
      dispatch(sortPopulation("asc"))
    }

    const handleDesc = () => {
      dispatch(sortPopulation("desc"))
    }
    
    return(
        <div className="sort">
        <p>A-Z</p>
        {sortBy.length > 1 && (
          <button name="aToZ" onClick={handleSort} className="button">
            &#10607; A-Z
          </button>
        )}
        {sortBy.length > 1 && (
          <button name="zToA" onClick={handleSort} className="button">
            &#10607; Z-A
          </button>
        )}
        <p>DATE OF BIRTH</p>
        <button name="asc" onClick={handleAsc}>
        &#10607; 
        </button>
        <button name="desc" onClick={handleDesc}>
        &#10607; 
        </button>
        <button className="order" onClick={handleOrder}>ORDER</button>
        </div>
    )
}

export default Sort;
