import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_NAME = 'GET_NAME';
export const GET_DETAIL = 'GET_DETAIL'
export const SORT_COUNTRY = "SORT_COUNTRY"
export const ORIGINAL_ORDER = 'ORIGINAL_ORDER'
export const SORT_POPULATION = 'SORT_POPULATION'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';


export function getCountries() {
    return async function(dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/countries/');
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            });
        } catch (error) {
            // Puedes manejar errores aquí, por ejemplo, dispatchando otra acción de error si es necesario
            console.error("Error al obtener países:", error);
        }
    };
}

export const getName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries?name=${name}`)
            dispatch({ 
                type: GET_NAME, 
                payload: response.data
            })
        } catch (error) {
            console.error("Error al buscar conductor por nombre:", error);
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({
          type: GET_DETAIL,
          payload: response.data
        });
      } catch (error) {
        console.error('Error al obtener el detalle del país:', error);
        // Aquí puedes manejar el error según tus necesidades, por ejemplo, enviando un mensaje de error al usuario
      }
    };
  }

export function sortCountry(filterName) {
    return{
        type: SORT_COUNTRY, 

        payload: filterName
    }
}

export function originalOrder() {
    return{
        type: ORIGINAL_ORDER
    }
}

export function sortPopulation(order) {
    return{
        type: SORT_POPULATION,
        payload: order
    }
}

export function filterByContinent(continent) {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    };
}
