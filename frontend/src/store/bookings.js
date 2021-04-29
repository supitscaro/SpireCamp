import { csrfFetch } from './csrf';

const GET_BOOKINGS = "hostings/GET_BOOKINGS";

const findBookings = (list) => {
    return {
        type: GET_BOOKINGS,
        list
    }
};

export const getBookings = () => async (dispatch) => {
    const res = await csrfFetch('/api/bookings');
    if (res.ok) {
        let bookings = await res.json();
        dispatch(findBookings(bookings));
    }
};

let initialState = {
    listOfBookings: {}
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKINGS:
            let allBookings = {};
            action.list.forEach((booking) => {
                // console.log('booking', booking);
                allBookings[booking.id] = booking;
            });
            return {
                ...state,
                listOfBookings: { ...state.listOfBookings, ...allBookings }
            };
        default:
            return state;
    }
}

export default bookingReducer;
