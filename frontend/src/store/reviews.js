import { csrfFetch } from './csrf';

const DELETE_REVIEW = "/hostings/DELETE_REVIEW";

const removeReview = (list) => {
    return {
        type: DELETE_REVIEW,
        list
    }
}

export const deleteReview = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        let review = await res.json();
        dispatch(removeReview(review));
    }
};

let initialState = {
    reviews: {},
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_REVIEW:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    reviews: state[action.id].filter((review) => review.id !== action.id)
                }
            }
        default:
            return state;
    }
}

export default reviewReducer;
