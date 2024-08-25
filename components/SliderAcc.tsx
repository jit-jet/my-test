import Link from "next/link";
import React from "react";

export default function SliderAcc() {
  return (
    <div className="col-span-1 m-6 bg-white border-2 rounded-md border-gray-600 h-5/6">
      <div className="  p-6">
        <p>
          <Link href={"/account/params"}>params</Link>
        </p>
        <p>
          <Link href={"/account/img/snappay"}>Intercepting</Link>
        </p>
        <p>
          <Link href={"/account/ref"}>use ref</Link>
        </p>
        <p>
          <Link href={"/account/env"}>Environment Variables</Link>
        </p>
        <p>
          <Link href={"/account/noEnter"}>No Enter by Middleware</Link>
        </p>
        <p>account</p>
      </div>
    </div>
  );
}
