import React from 'react'
import ProductDetail from '../pages/ProductDetail';
import { Navigate } from 'react-router-dom';

// authenticate가 true면 ProductDetail, false면 LoginPage
const PrivateRoute = ({authenticate}) => {

    return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute