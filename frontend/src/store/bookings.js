import { csrfFetch } from './csrf';

const GET_BOOKINGS = "hostings/GET_BOOKINGS";
const CREATE_BOOKING = "hostings/CREATE_BOOKING";

const findBookings = (list) => {
    return {
        type: GET_BOOKINGS,
        list
    }
};

const addBooking = (booking) => {
    return {
        type: CREATE_BOOKING,
        booking
    }
};

export const getBookings = () => async (dispatch) => {
    const res = await csrfFetch('/api/bookings');
    if (res.ok) {
        let bookings = await res.json();
        dispatch(findBookings(bookings));
    }
};

export const createBooking = (data) => async (dispatch) => {
    console.log('data', data);
    const res = await fetch(`/api/bookings/hostings/${data.hostings_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        const booking = await res.json();
        console.log('booking', booking);
        dispatch(addBooking(booking));
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
        case CREATE_BOOKING:
            const newState = { ...state };
            console.log('bookings reducer', action.booking);
            newState.listOfBookings[action.booking.id] = action.booking;
            return newState;
        default:
            return state;
    }
}

export default bookingReducer;
