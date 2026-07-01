import Image from "next/image";
import Link from "next/link";

export default function GalaSection() {
  return (
    <section className="py-16 px-6 border-b border-base-300" aria-label="Gala Event">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">

        {/* ── Flyer ── */}
        <div className="shrink-0 w-full md:w-[260px]">
          <Image
            src="/events/gala-to-remember.png"
            alt="A Gala to Remember — Celebrating Tomorrow's Leaders flyer"
            width={260}
            height={370}
            className="w-full rounded-xl shadow-2xl"
            priority
          />
        </div>

        {/* ── Story + CTAs ── */}
        <div className="flex flex-col gap-4 flex-1 text-sm leading-relaxed opacity-80">

          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
              Upcoming Black-Tie Event
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold italic text-base-content leading-snug opacity-100">
              One Opportunity Can Change a Life
            </h2>
            <div className="h-1.5 w-24 bg-accent mt-3 mb-4" />
          </div>

          <p>
            A few years ago, a young student attended one of our entrepreneurship&apos;s programs
            feeling unsure of their future. Like many young people, they had dreams but didn&apos;t
            know where to start. They had never learned about business, leadership, money management,
            or how to turn an idea into reality.
          </p>

          <p>
            Through mentorship, hands-on activities, and encouragement, that student discovered
            something powerful:{" "}
            <strong className="text-accent opacity-100 text-base uppercase tracking-wide">
              Confidence
            </strong>
          </p>

          <p>
            They learned that their ideas mattered. They learned how entrepreneurs solve problems,
            create opportunities, and make a difference in their communities.
          </p>

          <p>Today, hundreds of young people are waiting for the same opportunity.</p>

          <p>
            Some come from families that can easily afford enrichment programs. Others cannot. Yet,
            every child deserves the chance to discover their potential, build confidence, and learn
            skills that schools do not teach.
          </p>

          <p className="font-semibold opacity-100">
            That is why the Future Entrepreneurs of America Foundation exists.
          </p>

          <p>
            The Black-Tie Gala Event is more than a gala. It is an investment in the next generation
            of leaders, innovators and entrepreneurs.
          </p>

          <p>
            When you attend, sponsor, or donate, you help provide scholarships, entrepreneurship,
            education, mentorship, and life-changing experiences for youth who are eager to learn
            and grow.
          </p>

          {/* Impact list */}
          <div className="flex flex-col gap-1 pl-1 font-semibold opacity-100 text-base-content">
            <span>· One seat at a gala.</span>
            <span>· One sponsorship.</span>
            <span>· One donation.</span>
          </div>

          <p className="font-semibold opacity-100">
            Can create one opportunity that changes a young person&apos;s life forever.
          </p>

          <p>
            Join us at the{" "}
            <strong className="opacity-100">
              Black-Tie Gala Event: Celebrating Tomorrow&apos;s Leaders
            </strong>{" "}
            and help us empower the next generation of entrepreneurs and leaders. Together we can
            turn dreams into opportunities, and opportunities into success!!!
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="https://givebutter.com/c/X0GXZ6?source=qr&version=1"
              target="_blank"
              rel="noopener noreferrer"
              id="gala-get-tickets-btn"
              className="btn btn-accent font-bold px-8"
            >
              Get Tickets
            </Link>
            <Link
              href="/new-sponsor"
              id="gala-sponsorship-btn"
              className="btn btn-outline font-bold px-8"
            >
              Sponsorship Info
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
