import Image from "next/image";
import Hero from "./components/Hero";
import { Metadata } from "next";
import flyer from "./assets/latest_events/flyer.png"
import image1 from "./assets/latest_events/FE1.jpg"
import image2 from "./assets/latest_events/FE2.jpg"
import image3 from "./assets/latest_events/FE3.jpg"
import image4 from "./assets/latest_events/fe.jpg"
import image5 from "./assets/latest_events/fe4.jpg"
import image6 from "./assets/latest_events/fe5.jpg"
import image7 from "./assets/latest_events/fe6.jpg"

export const metadata: Metadata = {
  title: 'Future Entrepreneurs Of America Foundation',
  description: '...',
}

export default function Home() {
  return (
    <div >
      
      <Hero />
      
      <div className="grid grid-cols-2 place-items-center gap-10 p-10">
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={flyer} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image1} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image2} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image3} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image4} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image5} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image6} height={500} width={500} />
        </div>
        <div>
          <Image alt="alt img to be put" placeholder="blur" src={image7} height={500} width={500} />
        </div>
      </div>

    </div>
  );
}
