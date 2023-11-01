import { Link } from "react-router-dom";
import './landing.css'


function Landing () {
    return(
        <div className="landing">
            <Link to='/home'>
                <button>
                    <span>
                        JOIN
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default Landing;
