import BackButton from "@/app/components/BackButton";
import React from "react";

export default function SinglePlatinumSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/o74Q2bs593KASrbcgj0I"
        id="inline-o74Q2bs593KASrbcgj0I"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="One Event Only Sponsorship - Platinum Sponsorship ($1000)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-o74Q2bs593KASrbcgj0I"
        data-form-id="o74Q2bs593KASrbcgj0I"
        title="One Event Only Sponsorship - Platinum Sponsorship ($1000)"
      >
      </iframe>
    </div>
  );
}
