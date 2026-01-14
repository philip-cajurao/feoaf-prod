import { Metadata } from "next";
import StoryBanner from "../components/banners/StoryBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funding Request | Future Entrepreneurs Of America Foundation",
  description:
    "Empowering youth ages 9–17 with real-world business training, the Future Entrepreneurs of America Foundation is a nonprofit dedicated to developing the next generation of entrepreneurs through age-appropriate guidance, funding, and hands-on experiences beyond the classroom.",
  icons: {
    icon: [
      "/logo.png",
      "/favicon.ico"
    ],
  },
  facebook: {
    appId: "61573876332746",
  },
};

export default function FundingRequest() {
  return (
    <div className="flex flex-col relative overflow-x-hidden  min-h-[100dvh]">
      <StoryBanner />

      <div className="relative overflow-hidden py-8">

        <div className="flex justify-evenly">
          <Link href="#" className="btn btn-lg btn-accent rounded-lg">Youth Business loan Application</Link>
          <Link href="#" className="btn btn-lg btn-accent rounded-lg">Youth Business loan Program</Link>
        </div>
      </div>
    </div>
  );
}
