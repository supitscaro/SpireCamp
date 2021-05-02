import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/reviews";
import "./hosting.css";

function DeleteReview({ props }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    // const review = useSelector(state => state.reviews)
    // const [deletedReview, setDeletedReview] = useState('');

    const deleteRev = (e) => {
        e.preventDefault();
        dispatch(deleteReview(props));
    }

    let deleteBtn;

    if (sessionUser) {
        deleteBtn = (
            <div>
                <button className="delete-btn" onClick={deleteRev}>Delete Review!</button>
            </div>
        )
    }

    return (
        <>
            { deleteBtn}
        </>
    )
}

export default DeleteReview;
