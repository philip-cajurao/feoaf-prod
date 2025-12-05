import BackButton from "@/app/components/BackButton";
import React from "react";

export default function AnnualGoldSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/EUjwQKI9i0kqtNyazQCD"
        id="inline-EUjwQKI9i0kqtNyazQCD"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Annual Sponsorship - Gold ($2500)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-EUjwQKI9i0kqtNyazQCD"
        data-form-id="EUjwQKI9i0kqtNyazQCD"
        title="Annual Sponsorship - Gold ($2500)"
      >
      </iframe>
    </div>
  );
}
