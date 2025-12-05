import BackButton from "@/app/components/BackButton";
import React from "react";

export default function AnnualSilverSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/qKa0uO7oJbLsPzNgE1vH"
        id="inline-qKa0uO7oJbLsPzNgE1vH"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Annual Sponsorship - Silver ($1000)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-qKa0uO7oJbLsPzNgE1vH"
        data-form-id="qKa0uO7oJbLsPzNgE1vH"
        title="Annual Sponsorship - Silver ($1000)"
      >
      </iframe>
    </div>
  );
}
