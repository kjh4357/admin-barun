import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { auth, db } from "../../lib/firebase";
import { toast } from "react-toastify";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        toast.error("이메일, 비밀번호를 확인해주세요.");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#F0F0F0]">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-center">
          <img src={Logo} alt="" className="inline-block w-48" />
        </h1>

        <div className="mb-2">
          <label for="email" className="block text-sm font-semibold black">
            Email
          </label>
          <input
            type="email"
            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md black focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label for="password" className="block text-sm font-semibold black">
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a> */}
        <div className="mt-6">
          <button
            onClick={onLogin}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#162138] rounded-md  focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
