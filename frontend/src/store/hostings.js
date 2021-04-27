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
        let list = await res.json();
        dispatch(findHostings(list));
    }
}

let initialState = {
    list: {}
};

const hostingReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_HOSTING:
            let allHostings = {};
            action.list.forEach(hosting => {
                allHostings[hosting.id] = hosting;
            });
            return {
                ...allHostings,
                ...state,
                // list: action.list
            };
        default:
            return state;
    }
};


export default hostingReducer;
