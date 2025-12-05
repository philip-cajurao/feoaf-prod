import BackButton from "@/app/components/BackButton";
import React from "react";

export default function AnnualPlatinumSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/AB7HX2hGcnr7fI7HcrAN"
        id="inline-AB7HX2hGcnr7fI7HcrAN"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Annual Sponsorship - Platinum ($5000)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-AB7HX2hGcnr7fI7HcrAN"
        data-form-id="AB7HX2hGcnr7fI7HcrAN"
        title="Annual Sponsorship - Platinum ($5000)"
      >
      </iframe>
      
    </div>
  );
}
