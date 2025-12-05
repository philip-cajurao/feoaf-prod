import BackButton from "@/app/components/BackButton";
import React from "react";

export default function AnnualBronzeSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/v6GuzLgpf7UJF7lP6L5R"
        id="inline-v6GuzLgpf7UJF7lP6L5R"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Annual Sponsorship - Bronze ($500)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-v6GuzLgpf7UJF7lP6L5R"
        data-form-id="v6GuzLgpf7UJF7lP6L5R"
        title="Annual Sponsorship - Bronze ($500)"
      >
      </iframe>

    </div>
  );
}
