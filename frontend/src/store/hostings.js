import { csrfFetch } from './csrf';

const GET_HOSTING = "hosting/GET_HOSTING";

const findHosting = (hostingPost) => {
    return {
        type: GET_HOSTING,
        payload: hostingPost
    }
};

// for the individual hosting
export const getHosting = () => async (dispatch) => {
    const res = await csrfFetch('/api/hosting');
    if (res.ok) {
        let hosting = await res.json();
        dispatch(findHosting(hosting));
    }
}

let initialState = {
    hosting: []
};

const hostingReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_HOSTING:
            newState.hostingPost = action.payload;
            return newState;
        default:
            return state;
    }
}

export default hostingReducer;
