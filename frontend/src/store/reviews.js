import { csrfFetch } from './csrf';

const DELETE_REVIEW = "/hostings/DELETE_REVIEW";
const ADD_REVIEW = "hostings/ADD_REVIEW";

const removeReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
};

export const deleteReview = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        let deletedReview = await res.json();
        dispatch(removeReview(deletedReview));
    }
};

export const addReviews = (data) => async (dispatch) => {
    const res = await fetch(`/api/reviews/hostings/${data.id}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(res);

    if (res.ok) {
        const item = await res.json();
        dispatch(addReview(item));
        // return item;
    }
}

let initialState = {
    reviews: {},
}

const reviewReducer = (state = initialState, action) => {
    let newStates = {};
    switch (action.type) {
        case DELETE_REVIEW:
            newStates = { ...state };
            delete newStates[action.review.id];
            return newStates;
        case ADD_REVIEW:
            const newState = { ...state }
            newState[action.review.id] = action.review
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
