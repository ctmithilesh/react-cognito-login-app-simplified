import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoute = () => {
  const state = useSelector((state) => state);
  console.log(state)
        if (state.login.login_status) {

            return (
                    <Outlet />
            )

        } else
         {
            return (
            <Navigate
                to={{
                pathname: "/",
                }}
            />
            );
        }
};