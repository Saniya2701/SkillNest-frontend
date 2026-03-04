import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Loading from '../../common/Loading'

const ProtectedRoute = ({ children }) => {

    const { token } = useSelector((state) => state.auth)

    // 🔥 If token is undefined (redux not ready yet), show loader
    if (token === undefined) {
        return <Loading />
    }

    // ✅ If token exists, allow access
    if (token) {
        return children
    }

    // ❌ If no token, redirect
    return <Navigate to="/login" replace />
}

export default ProtectedRoute