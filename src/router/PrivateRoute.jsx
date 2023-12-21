import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user,loading } =  useAuth()
    const location = useLocation()


    if (loading) {
        return <p className="text-center mt-24"><span className="loading loading-infinity  loading-lg"></span></p>
  }

  if (user) {
    return children;
    }
  else {
      return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;