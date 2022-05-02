import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, sendError] =
    useSendEmailVerification(auth);

  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="my-16">
        <div className="container">
          <div className="row">
            <div className="cols">
              <div className="p-10 flex justify-evenly">
                <h2>Please Verify Your Email</h2>
                <button
                  className="btn btn-primary"
                  onClick={async () => {
                    await sendEmailVerification();
                    toast("Sent email");
                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return children;
  }
};

export default RequireAuth;
