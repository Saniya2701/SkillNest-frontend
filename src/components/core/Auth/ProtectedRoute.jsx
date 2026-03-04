import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth)

  const authToken = token || localStorage.getItem("token")

  if (!authToken) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute