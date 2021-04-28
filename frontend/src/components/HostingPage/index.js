import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneHosting } from "../../store/hostings";

function HostingPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.hosting[id]);

    useEffect(() => {
        dispatch(oneHosting(id));
    }, [id]);

    return (
        <div>
            {console.log(post)}
        </div>
    )
}

export default HostingPage;
