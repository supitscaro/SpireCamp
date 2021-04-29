import { csrfFetch } from './csrf';

const DELETE_REVIEW = "/hostings/DELETE_REVIEW";
const ADD_REVIEW = "hostings/ADD_REVIEW";

const removeReview = (list) => {
    return {
        type: DELETE_REVIEW,
        list
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
        let review = await res.json();
        dispatch(removeReview(review));
    }
};

export const addReviews = (data, id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/hostings/${id}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        const item = await res.json();
        dispatch(addReview(item));
        return item;
    }
}

let initialState = {
    reviews: {},
}

const reviewReducer = (state = initialState, action) => {
    // let newState = {};
    switch (action.type) {
        case DELETE_REVIEW:
            let reviewsList = state.reviews;
            delete reviewsList.id;
            return {
                ...state,
            }
        case ADD_REVIEW:
            const newState = { ...state }
            newState[action.review.id] = action.review
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
