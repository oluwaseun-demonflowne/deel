import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="modal fixed bottom-0 left-0 right-0 top-0 flex h-screen items-center justify-center">
      <div className="flex justify-center overflow-hidden rounded-xl">
        <form>
          <h1>Log into deel</h1>
          <button>
            <FcGoogle />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
