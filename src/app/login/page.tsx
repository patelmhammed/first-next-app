"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import signupImage from "@/images/teamwork.svg";
import backSignupImage from "@/images/signup-background.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "/api/users/login",
        user
      );
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onInvalidCredentials = () => {
    if (user.email.trim().length == 0) {
      alert("Enter your email address");
    } else {
      alert("Enter your password");
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90%
      flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark grid grid-cols-2 items-center gap-20 p-5 rounded-2xl">
        <div className="relative">
          <Image
            src={backSignupImage}
            alt=""
          />
          <Image
            className="absolute top-36"
            src={signupImage}
            alt=""
          />
        </div>

        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white">
            Login
          </h1>
          <p className="text-dull-white">
            Welcome to my website
          </p>
          <div className="space-y-6 text-white">
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>

            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type="password"
                placeholder="password"
                required
                value={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>

            <button
              className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2"
              onClick={
                user.email.length > 0 &&
                user.password.length > 0
                  ? onLogin
                  : onInvalidCredentials
              }>
              Sign in
            </button>
          </div>

          <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
            <p>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-neon-blue font-semibold cursor-pointer">
                Sign Up
              </a>
            </p>
            <p>
              Forgot Password?{" "}
              <a
                href=""
                className="text-neon-blue font-semibold cursor-pointer">
                Reset Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
