import Image from "next/image";
import GhlForm from "@/app/components/GhlForm";

export default function SponsorAKid() {
  return (
    <GhlForm
      formId="LulkzPfRY2SVuV8HQF6a"
      title="Sponsor A Kid"
      backHref="/"
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
          Your recurring donations will help a child through seed money for
          their business and continuing financial education. The future of
          America depends on successful capitalist who are willing to give back
          to future generations. Our core values include the kids learning the
          importance of giving back after being successful, similar to how you
          are giving today. Thank you for your support.
        </p>
      </div>
    </GhlForm>
  );
}