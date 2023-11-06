import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './detail.css';
import { getDetail } from "../../redux/actions";

function Detail() {
    const dispatch = useDispatch();
    const details = useSelector((state) => state.countries);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    // Verifica si los detalles están cargando o no
    if (!details) {
        return <div className="detail">Loading...</div>;
    }

    // Accede a las propiedades específicas de los detalles del país
    const { name, capital, continents, subregion, area, population } = details;
    console.log(details);
    return (
        <div className="detail">
            <h1>{name}</h1>
            <p>{id}</p>
        </div>
    );
}

export default Detail;

