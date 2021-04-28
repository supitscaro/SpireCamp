import { csrfFetch } from './csrf';

const GET_HOSTINGS = "hostings/GET_HOSTINGS";
const STATES = "hostings/STATES";

const findHostings = (list) => {
    return {
        type: GET_HOSTINGS,
        list
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
        case STATES:
            let stateHostings = [];
            action.list.forEach(hosting => {
                stateHostings[hosting.id] = hosting;
            });
            return {
                stateHostings,
                ...state,
                list: action.list
            }
        default:
            return state;
    }
};


export default hostingReducer;
