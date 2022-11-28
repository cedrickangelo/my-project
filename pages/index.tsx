import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className=" mx-auto ">
        {/* NavBar */}
        <div className="flex flex-row justify-between items-center p-10 pb-5">
          <div className="text-3xl font-bold text-yellow-500">cedrick.</div>
          <ul className="sm:flex sm:flex-row gap-4 text-xs hidden">
            <li className="hover:text-yellow-600">Home</li>
            <li className="hover:text-yellow-600">About</li>
            <li className="hover:text-yellow-600">Contact</li>
          </ul>
        </div>
        {/* Body */}
        <div className="text-gray-800 px-10">
          {/* Hero Section */}
          <div className="py-4 space-y-6">
            <div className=" space-y-3">
              <h1 className="text-4xl font-bold tracking-tight">
                Hello, I am Cedrick! 👋
              </h1>
              <h2 className="text-sm max-w-md">
                I am the Link.exe President. I am an IT student from West
                Visayas State University
              </h2>
              <div className="pt-3">
                <button className="px-4 py-2 bg-yellow-500 rounded-lg text-sm font-medium hover:opacity-75">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full h-full bg-yellow-600">
              Image Here 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
