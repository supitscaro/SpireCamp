import { csrfFetch } from './csrf';

const GET_HOSTINGS = "hostings/GET_HOSTINGS";
const HOSTING_PAGE = "hostings/HOSTING_PAGE";
const STATES = "hostings/STATES";

const findHostings = (list) => {
    return {
        type: GET_HOSTINGS,
        list
    }
};

const individualHosting = (hosting) => {
    return {
        type: HOSTING_PAGE,
        hosting
    }
};

const stateFilters = (list) => {
    return {
        type: STATES,
        list
    }
};

// for the list of hostings
export const getHostings = () => async (dispatch) => {
    const res = await csrfFetch('/api/hostings');
    if (res.ok) {
        let hostings = await res.json();
        dispatch(findHostings(hostings));
    }
};

// for individual hosting page
export const oneHosting = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/hostings/${id}`);
    if (res.ok) {
        let hosting = await res.json();
        dispatch(individualHosting(hosting));
    }
};

// for list of filtered hostings by states
export const stateHostings = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/states/${id}`);
    if (res.ok) {
        let stateHosts = await res.json();
        dispatch(stateFilters(stateHosts));
    }
}

let initialState = {
    list: []
};

const hostingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOSTINGS:
            let allHostings = [];
            action.list.forEach(hosting => {
                allHostings[hosting.id] = hosting;
            });
            return {
                allHostings,
                ...state,
                list: action.list
            };
        case HOSTING_PAGE:
            return {
                ...state,
                [action.hosting.hosting.id]: action.hosting.hosting,
                list: [...state.list, action.hosting.hosting],
                reviews: action.hosting.reviews,
            };
        // let hostingList = newState.list.map(id => newState[id]);
        // hostingList.push(action.hosting);
        // return newState;
        case STATES:
            let stateHostings = [];
            action.list.forEach(hosting => {
                stateHostings[hosting.id] = hosting;
            });
            return {
                stateHostings,
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};


export default hostingReducer;
