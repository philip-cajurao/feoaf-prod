import BackButton from "@/app/components/BackButton";
import React from "react";

export default function AnnualCommunitySupport() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/nNkSVvrzs9DcPbVceqkt"
        id="inline-nNkSVvrzs9DcPbVceqkt"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Annual Sponsorship - Community Friend ($Any amount)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-nNkSVvrzs9DcPbVceqkt"
        data-form-id="nNkSVvrzs9DcPbVceqkt"
        title="Annual Sponsorship - Community Friend ($Any amount)"
      >
      </iframe>
    </div>
  );
}
