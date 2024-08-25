import ShamsiPicker from "@/components/ShamsiPicker";
import React from "react";

export default function page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="m-9">
      <h1>params page</h1>
      {params.slug ? (
        params.slug.map((slug, i) => (
          <p>
            {i + 1}_{slug}
          </p>
        ))
      ) : (
        <>
          <h2>no param</h2>
          <div>
            <ShamsiPicker />
          </div>
        </>
      )}
    </div>
  );
}
