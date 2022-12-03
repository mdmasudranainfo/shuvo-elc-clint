import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="">
      <div className="lg:flex justify-between container mx-auto hidden">
        <div className="">
          <small>
            Welcome to the Biggest Primium online store Products Collection in
            Bangladesh
          </small>
        </div>
        <div className="">
          <small className="mx-3">
            Call us{" "}
            <a className="text-primary font-semibold" href="tel:07142818037">
              +8801628777067
            </a>
          </small>
          <small>Retailer Request</small>
        </div>
      </div>
      {/* navbar */}
      <NavBar></NavBar>
      {/*  */}
      {/* navigation   */}
      <ul className="flex font-semibold mt-3">
        <li className="mr-6  relative">
          <Link className="flex text-white p-1 rounded w-52 bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            All Categories
          </Link>
          <ul className="border-2 absolute z-50 bg-white">
            <li className="border-b-2 p-1">
              <Link>Smart Watch</Link>
            </li>
            <li className="border-b-2 p-1">
              <Link>Chronograph Watch</Link>
            </li>
            <li className="border-b-2 p-1">
              <Link>Automatic Watch</Link>
            </li>
            <li className="border-b-2 p-1">
              <Link>Quartz Watch Others items</Link>
            </li>

            <li className="border-b-2 p-1">
              <Link>Wallat</Link>
            </li>
            <li className="border-b-2 p-1">
              <Link>Bracelet</Link>
            </li>
            <li className=" p-1">
              <Link>Gadget Items</Link>
            </li>
          </ul>
        </li>
        <li className="mr-6 block">
          <Link className="">Home</Link>
        </li>
        <li className="mr-6 block">
          <Link className="">Black Friday</Link>
        </li>
        <li className="mr-6">
          <Link className="">Campaign</Link>
        </li>
        <li className="mr-6">
          <Link className="">Brands</Link>
        </li>
        <li className="mr-6">
          <Link className="">Brands</Link>
        </li>
        <li className="mr-6">
          <Link className="">Service Center</Link>
        </li>
      </ul>

      {/* navigation end */}
    </div>
  );
};

export default Header;
