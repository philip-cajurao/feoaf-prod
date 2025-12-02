import React from "react";

export default function MissionVision() {
  return (
    <>
      <div className="my-24 max-w-2xl grid gap-y-10 mx-auto w-full px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <p className="font-bold text-base sm:text-xl">Our</p>
            <h2 className="font-bold text-xl sm:text-3xl ml-1 px-4 -ml-2">Mission</h2>
          </div>
          <p className="mt-2 text-center text-sm sm:text-base italic">
            Our mission in Future Entrepreneurs of America Foundation is  to empower young people with the knowledge, 
            confidence, and real-world opportunities to become innovative leaders, successful entrepreneurs, 
            and positive changemakers in their communities.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <p className="font-bold text-base sm:text-xl">Our</p>
            <h2 className="font-bold text-xl sm:text-3xl ml-1 px-4 -ml-2">Vision</h2>
          </div>
          <p className="mt-2 text-center text-sm sm:text-base">
            &quot;Our vision is to build a future where every young person has the confidence, 
            skills, and mindset to become a successful entrepreneur, innovative leader, 
            and positive force in their community.&quot;
          </p>
        </div>
      </div>
    </>
  );
}
