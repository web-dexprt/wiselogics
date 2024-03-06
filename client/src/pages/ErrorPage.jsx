import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <main className="flex flex-1 items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="font-semibold text-3xl text-indigo-600">404</h2>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/contact-us" className="text-sm font-semibold text-white">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-white text-center text-gray-500 text-sm">
        &copy; 2024{" "}
        <span className="hover:text-blue-500 hover:cursor-pointer">
          <Link to={"/"}>Wiselogics</Link>
        </span>
        . All rights reserved.
      </footer>
    </div>
  );
}
