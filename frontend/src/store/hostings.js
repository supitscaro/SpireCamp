import { csrfFetch } from './csrf';

const GET_HOSTINGS = "hostings/GET_HOSTINGS";
const HOSTING_PAGE = "hostings/HOSTING_PAGE";
const STATES = "hostings/STATES";
const STATE = "hostings/STATE";
const ACTIVITIES = "hostings/ACTIVITIES";
const ALL_ACTIVITIES = "hostings/ALL_ACTIVITIES";
const DELETE = "hostings/DELETE";

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

const stateFilters = (hosting) => {
    return {
        type: STATES,
        hosting
    }
};

const getAllStates = (list) => {
    return {
        type: STATE,
        list
    }
};

const activitiesFilter = (list) => {
    return {
        type: ACTIVITIES,
        list
    }
};

const getAllActivities = (list) => {
    return {
        type: ALL_ACTIVITIES,
        list
    }
};

const remove = (id) => {
    return {
        type: DELETE,
        id
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
};

// for list of all states
export const findAllStates = () => async (dispatch) => {
    const res = await csrfFetch('/api/state');
    if (res.ok) {
        let state = await res.json();
        dispatch(getAllStates(state));
    }
};

// filtered list of activities
export const activityFilter = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/activities/${id}`);
    if (res.ok) {
        let activity = await res.json();
        dispatch(activitiesFilter(activity));
    }
};

// list for all activities
export const allActivities = () => async (dispatch) => {
    const res = await csrfFetch('/api/activities');
    if (res.ok) {
        let activities = await res.json();
        dispatch(getAllActivities(activities));
    }
};

export const deleteSpot = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/hostings/${id}`, {
        method: 'DELETE',
    });

    if (res.ok) {
        let spot = await res.json();
        dispatch(remove(spot.id));
    }
}

let initialState = {
    hostings: {
        state: {},
        activities: {},
    },
    states: {}
};

const hostingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOSTINGS:
            let allHostings = {};
            action.list.forEach(hosting => {
                allHostings[hosting.id] = hosting;
            });
            return {
                ...state,
                hostings: { ...action.hostings, ...allHostings, ...state.hostings }
            };
        case HOSTING_PAGE:
            return {
                ...state,
                [action.hosting.hosting.id]: action.hosting.hosting,
                hostings: { ...state.hostings, ...action.hosting.hosting },
                reviews: action.hosting.reviews,
            };
        case STATES:
            let stateHostings = {};
            action.hosting.forEach(hosting => {
                stateHostings[hosting.id] = hosting;
            });
            return {
                ...state,
                hostings: { ...state.hostings, state: stateHostings }
            };
        case STATE:
            let newStates = {};
            action.list.forEach(state => {
                newStates[state.id] = state;
            });
            return {
                ...state,
                states: { ...state.states, ...newStates }
            }
        case ACTIVITIES:
            let activitiesList = {};
            action.list.forEach(activity => {
                activitiesList[activity.id] = activity;
            });
            return {
                ...state,
                hostings: { ...state.hostings, activities: activitiesList }
            };
        case ALL_ACTIVITIES:
            let listOfActivities = {};
            action.list.forEach(activity => {
                listOfActivities[activity.id] = activity;
            });
            return {
                ...state,
                hostings: { ...state.hostings, ...listOfActivities }
            }
        default:
            return state;
    }
};


export default hostingReducer;
