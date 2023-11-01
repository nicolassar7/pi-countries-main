import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './detail.css'
import { getDetail } from "../../redux/actions";

function Detail () {
    const dispatch = useDispatch();
    const details = useSelector((state) => state.details)
    const { cca3 } = useParams()

    useEffect(() => {
        dispatch(getDetail(cca3))
    }, [dispatch, cca3])

     

    return(
        <div className="detail">
            <img src={details.flags.png} alt='' />
        </div>
    )
}

export default Detail