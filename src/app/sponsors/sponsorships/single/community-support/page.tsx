import BackButton from "@/app/components/BackButton";
import React from "react";

export default function SingleCommunitySupport() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/i9G4PZPpmYQJ45R09eux"
        id="inline-i9G4PZPpmYQJ45R09eux"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="One Event Only Sponsorship - Community Friends Support ($any amount)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-i9G4PZPpmYQJ45R09eux"
        data-form-id="i9G4PZPpmYQJ45R09eux"
        title="One Event Only Sponsorship - Community Friends Support ($any amount)"
      >
      </iframe>


    </div>
  );
}
