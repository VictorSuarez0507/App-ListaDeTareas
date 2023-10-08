import { Navigate } from "react-router-dom";

function privateRoute  ({element}) {
    const token = localStorage.getItem("token");

    if (!token) {
    return <Navigate to="/login" />;
    }
    return element;
}

export default privateRoute;