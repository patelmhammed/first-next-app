"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function profilePage() {
  const router = useRouter();

  const onLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout successful");
      console.log(response);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    const id = response.data.data._id;
    router.push(`/profile/${id}`);
  };

  return (
    <div
      className="flex flex-col items-center
        justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <button
        onClick={onLogout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 
      text-white font-bold py-2 px-4 rounded">
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded">
        My Details
      </button>
    </div>
  );
}
