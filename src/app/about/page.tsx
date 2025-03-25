import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function About() {
  return (
    <div className="p-10">
      <div>
        <p>
          Future Entrepreneurs of America Foundation was founded in December
          2021, originally known as FHT’s Future Entrepreneurs. During the hype
          of the pandemic, children were learning virtually, their physical
          education became a struggle, and after school activities were all shut
          down. I thought of doing something different for kids, something they
          can do to lessen their electronic and computer exposure. Since
          everything was virtual, why not do an online holiday event that could
          teach them a little bit about business? In the first year we had 9
          kids, then grew to 12 the following year, and in December of last
          year, it was opened to the public. To our surprise, there were 30 kids
          who registered. To accommodate more children, we registered as a
          non-profit. We want people out there to know that we exist, and we are
          here to help the future of this country become successful and create a
          legacy.
        </p>
        <p>
          We are so happy and proud to introduce FUTURE ENTREPRENEURS OF AMERICA
          FOUNDATION. The organization focuses on building and creating young
          entrepreneurs by providing age-appropriate business training, guidance
          and funding for young kids, 9-17 years old.
        </p>
      </div>

      <div className="mt-4 flex justify-center gap-x-10">
        <div>
          <h2>Mission</h2>
          <p>
            Our mission is to develop the next generation of entrepreneurs by
            providing real world business exposure that is not taught in schools
            to youth between 9 and 17 years old. We want to be an add-on, to
            teach kids and teens the things in the business world that aren’t
            taught in academic settings.
          </p>
        </div>
        <div>
          <h2>Vision</h2>
          <p>
            As we continue to grow, our commitment remains steadfast in keeping
            pace with the developing needs of our kids and the organization and
            providing them with opportunities regardless of their age.
          </p>
        </div>
      </div>
    </div>
  );
}
