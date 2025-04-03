import React from "react";

export default function MissionVision() {
  return (
    <>
      <div className="my-24 max-w-2xl grid gap-y-10 mx-auto w-full px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <p className="font-bold text-xl">Our</p>
            <h2 className="font-bold text-2xl ml-1 px-4 bg-primary -ml-2 border">Mission</h2>
          </div>
          <p className="mt-2 text-center">
            Our mission is to develop the next generation of entrepreneurs by
            providing real world business exposure that is not taught in schools
            to youth between 9 and 17 years old. We want to be an add-on, to
            teach kids and teens the things in the business world that aren’t
            taught in academic settings.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <p className="font-bold text-xl">Our</p>
            <h2 className="font-bold text-2xl ml-1 px-4 bg-success -ml-2 border">Vision</h2>
          </div>
          <p className="mt-2 text-center">
            As we continue to grow, our commitment remains steadfast in keeping
            pace with the developing needs of our kids and the organization and
            providing them with opportunities regardless of their age.
          </p>
        </div>
      </div>
    </>
  );
}
