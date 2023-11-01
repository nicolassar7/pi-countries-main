import { 
    GET_COUNTRIES,
    GET_NAME,
    GET_DETAIL,
    SORT_COUNTRY,
    SORT_POPULATION,
    ORIGINAL_ORDER
        } from "./actions";

let initialState = {
    countries: [],
    countryCopy: [],
    activities: [],
    details: [],
    filter: "all"
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countryCopy: action.payload
            };
        case GET_NAME:
            return {
                ...state,
                countries: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                details: action.payload
            }
        case SORT_COUNTRY:
            if (action.payload === "aToZ") {
                return{
                    ...state,
                    countries: [...state.countryCopy].sort((a, b) => 
                    a.name.common.localeCompare(b.name.common)
                    )
                }
            }
            if (action.payload === "zToA") {
                return{
                    ...state,
                    countries: [...state.countryCopy].sort((a, b) => 
                        b.name.common.localeCompare(a.name.common)
                    )
                }
            }
        case ORIGINAL_ORDER:
            return{
                ...state,
                countries: [...state.countryCopy]
            }
            case SORT_POPULATION:
    const { payload } = action;
    let sorted;

    if (payload === "asc") {
        sorted = [...state.countryCopy].sort((a, b) => {
            const popuA = parseInt(a.population, 10);
            const popuB = parseInt(b.population, 10);
            return popuA - popuB;
        });
    } else if (payload === "desc") {
        sorted = [...state.countryCopy].sort((a, b) => {
            const popuA = parseInt(a.population, 10);
            const popuB = parseInt(b.population, 10);
            return popuB - popuA;
        });
    }
    return {
        ...state,
        countries: sorted
    };


        default:
            return state;
        
    }
};

export default Reducer;
 