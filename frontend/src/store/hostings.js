import { csrfFetch } from './csrf';

const GET_HOSTING = "hostings/GET_HOSTING";

const findHostings = (list) => {
    return {
        type: GET_HOSTING,
        list
    }
};

// for the individual hosting
export const getHosting = () => async (dispatch) => {
    const res = await fetch('/api/hostings');
    if (res.ok) {
        let hostings = await res.json();
        dispatch(findHostings(hostings));
    }
};

let initialState = {
    list: []
};

const hostingReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_HOSTING:
            let allHostings = [];
            Array.from(action.list).forEach(hosting => {
                allHostings[hosting.id] = hosting;
            });
            return {
                ...allHostings,
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};

// switch (action.type) {
//     case LOAD:
//         const allSpots = [];
//         action.list.forEach(spot => {
//             allSpots[spot.id] = spot;
//         });
//         return {
//             allSpots,
//             ...state,
//             list: action.list,
//         }
//     default:
//         return state;
// }

export default hostingReducer;
