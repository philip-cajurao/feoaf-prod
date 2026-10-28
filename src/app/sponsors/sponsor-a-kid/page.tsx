import Image from "next/image";
import GhlForm from "@/app/components/GhlForm";
import { sponsorAKidMessage } from "@/data/sponsorAKid";

export default function SponsorAKid() {
  return (
    <GhlForm
      formId="LulkzPfRY2SVuV8HQF6a"
      title="Sponsor A Child"
      backHref="/sponsors?tab=sponsor-a-kid"
      iframeClassName="mb-20 h-auto overflow-y-hidden"
    >
      <div className="max-w-3xl mx-auto px-6 pt-2 md:pt-20 pb-8 text-center">
        <Image
          src="/logo.png"
          alt="Future Entrepreneurs of America Foundation logo"
          width={96}
          height={96}
          className="mx-auto mb-6"
          priority
        />
        <p className="text-base sm:text-lg leading-relaxed text-base-content/80">
          {sponsorAKidMessage}
        </p>
      </div>
    </GhlForm>
  );
}