import { Navigate } from "react-router-dom";

const PrivateRoutes = ({isAut, children}) => {
        return isAut
        ?children
        :<Navigate to="/login"/>
};

export default PrivateRoutes;