import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";

export default function Header() {
  return (
    <div className="py-2 flex justify-around text-center border-b text-gray-800 shadow-gray-600 shadow-lg">
      {/* <nav> */}
      <Link href={"/"}>Home</Link>
      <span>about us</span>
      <span>contact</span>
      <Link href={"/account"}>account</Link>
      <CountUp/>
      {/* </nav> */}
    </div>
  );
}


