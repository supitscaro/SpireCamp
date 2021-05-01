import { csrfFetch } from './csrf';

const POSTS_REVIEWS = "hostings/POSTS_REVIEWS"
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

const getAllReviews = (reviews) => {
    return {
        type: POSTS_REVIEWS,
        reviews
    }
};

export const deleteReview = (data) => async (dispatch) => {
    console.log('data', data);
    const res = await csrfFetch(`/api/reviews/${data.reviewId}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        // let deletedReview = await res.json();
        dispatch(removeReview(data.reviewId));
    }
};

export const addReviews = (data) => async (dispatch) => {
    // console.log('data', data);
    const res = await csrfFetch(`/api/reviews/hostings/${data.hostings_id}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        const item = await res.json();
        dispatch(addReview(item));
    }
};

export const getReviews = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/hostings/${id}`);
    if (res.ok) {
        let reviews = await res.json();
        console.log('reviews', reviews);
        dispatch(getAllReviews(reviews));
    }
};

let initialState = {
    reviews: {},
}

const reviewReducer = (state = initialState, action) => {
    let newStates = {};
    switch (action.type) {
        case DELETE_REVIEW:
            newStates = { ...state };
            delete newStates[action.review];
            return newStates;
        case ADD_REVIEW:
            const newState = { ...state }
            newState[action.review.id] = action.review
            return newState;
        case POSTS_REVIEWS:
            action.reviews.forEach((review) => {
                newStates[review.id] = review;
            });
            return newStates;
        default:
            return state;
    }
}

export default reviewReducer;
