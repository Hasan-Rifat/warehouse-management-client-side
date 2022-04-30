import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import icon from "../../../../images/google.png";
import fb from "../../../../images/fb-logo.png";
import Loading from "../../Loading/Loading";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  // RequireAuth
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // const navigate = useNavigate();

  if (loading || fbLoading) {
    return <Loading></Loading>;
  }

  let errorMessage;
  if (error || fbError) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  } else {
    errorMessage = "";
  }

  // RequireAuth
  if (user || fbUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className=" py-6">
      {/* divider   start*/}
      <div className="flex items-center justify-center pb-4">
        <div className="h-[1px] bg-[#ececec] w-2/5"></div>
        <p className="text-xl w-3/12 mb-0">Social Media</p>
        <div className="h-[1px] bg-[#ececec] w-2/5"></div>
      </div>
      {/* divider end */}
      <div className="flex">
        <button
          className="mr-2 w-50 border-[3px] shadow-md hover:shadow-xl rounded-md border-[#4f86ec] text-[#4f86ec]  bg-[#fff]  d-flex items-center"
          onClick={() => signInWithGoogle()}
        >
          <img src={icon} className="w-12 p-1" alt="" />{" "}
          <span className="px-4 font-semibold">Sign in Google</span>
        </button>
        <button
          className="ml-2 w-50 border-[3px] shadow-md hover:shadow-xl rounded-sm border-[#4f86ec] bg-[#4f86ec] text-white d-flex items-center"
          onClick={() => signInWithFacebook()}
        >
          <img src={fb} className=" w-12" alt="" />{" "}
          <span className="px-4 font-semibold">Sign in Facebook</span>
        </button>
      </div>
      {errorMessage}
    </div>
  );
};

export default Social;
