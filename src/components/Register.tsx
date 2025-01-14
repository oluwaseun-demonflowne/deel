"use client";
import { useAuthModalState } from "@/store";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

const Register = () => {
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
          <h1 className="text-3xl text-black pb-4 text-center font-black">
            Start your HR automation journey today
          </h1>
          <button className="flex justify-center bg-[#cecccc] w-[100%] rounded-md h-12 text-black gap-1 items-center ">
            <FcGoogle />
            Sign in with Google
          </button>
          <div className="mt-8 text-black space-y-4">
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
            <button className="text-[15px] text-white bg-[#00AC6B] font-medium h-12 rounded-md w-[100%]">
              Sign up and book a session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
