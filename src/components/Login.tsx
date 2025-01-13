import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <div className="flex p-4 w-[400px] bg-white justify-center overflow-hidden rounded-xl">
        <form className="w-[100%]">
          <h1 className="text-3xl pb-4 text-center font-black">
            Log into deel
          </h1>
          <button className="flex justify-center bg-[#cecccc] w-[100%] rounded-md h-12 text-black gap-1 items-center ">
            <FcGoogle />
            Sign in with Google
          </button>
          <div className="mt-8 space-y-4">
            <div className="spacey-y-3">
              <label className="text-[15px] font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                name="email"
                type="text"
                className="outline-none pl-3 border w-[100%] h-12"
                placeholder="Enter your email"
              />
            </div>
            <div className="spacey-y-3">
              <label className="text-[15px] font-medium" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="outline-none pl-3 border w-[100%] h-12"
                placeholder="*********"
              />
            </div>
            <button className="text-[15px] text-white bg-[#00AC6B] font-medium h-12 rounded-md w-[100%]">
              Login to experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
