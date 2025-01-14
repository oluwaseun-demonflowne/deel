"use client";
import { useAuthModalState } from "@/store";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

const Login = () => {
  const { showRegisterModal, setShowRegisterModal } = useAuthModalState();
  if (!showRegisterModal) {
    return null;
  }
  return (
    <div className="modal  fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center max-md:px-6 justify-center">
      <div className="flex p-7 w-[100%]  md:w-[500px] bg-white justify-center overflow-hidden rounded-xl">
        <form className="w-[100%]">
          <div className="flex w-full justify-end">
            <IoClose
              onClick={() => setShowRegisterModal(false)}
              className="text-2xl text-slate-400"
            />
          </div>
          <h1 className="text-3xl pb-4 text-center font-black">
            Start your HR automation journey today
          </h1>
          <button className="flex justify-center bg-[#cecccc] w-[100%] rounded-md h-12 text-black gap-1 items-center ">
            <FcGoogle />
          </button>
          <p>
            By creating an account, you agree to deel Terms and Privacy Policy.
          </p>
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
          <p className="text-[15px] text-center mt-6">
            Don&apos;t have an account?{" "}
            <span className="underline font-medium">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
