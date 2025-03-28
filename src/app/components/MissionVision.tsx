import React from "react";
import Card from "./Card";

export default function MissionVision() {
  return (
    <>
      <div className="mt-4 flex max-w-4xl mx-auto justify-between w-full gap-x-10">
        <Card
          customStyle="bg-primary w-full"
          title="Mission"
          body="
          Our mission is to develop the next generation of entrepreneurs by
            providing real world business exposure that is not taught in schools
            to youth between 9 and 17 years old. We want to be an add-on, to
            teach kids and teens the things in the business world that aren’t
            taught in academic settings.
          "
        />
        <Card
          customStyle="bg-secondary w-full"
          title="Vision"
          body="
          As we continue to grow, our commitment remains steadfast in keeping
            pace with the developing needs of our kids and the organization and
            providing them with opportunities regardless of their age.
          "
        />
      </div>
    </>
  );
}
