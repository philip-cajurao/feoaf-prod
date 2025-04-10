import BackButton from "@/app/components/BackButton";
import React from "react";

export default function BecomeSponsor() {
  return (
    <div className="h-[2300px] relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      {/* <h2 className="text-4xl font-bold text-center mt-20">
        Sponsor Registration
      </h2> */}

      <iframe
        className="mt-10 overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/F5Si2lr5zNrJ33D1mZC8"
        id="inline-F5Si2lr5zNrJ33D1mZC8"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Sponsorship form"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-F5Si2lr5zNrJ33D1mZC8"
        data-form-id="F5Si2lr5zNrJ33D1mZC8"
        title="Sponsorship form"
      ></iframe>
    </div>
  );
}
