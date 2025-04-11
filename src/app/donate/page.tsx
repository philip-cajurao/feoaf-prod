import React from "react";
import BackButton from "../components/BackButton";

export default function Donate() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      {/* <h2 className="text-4xl font-bold text-center mt-20">
           Be Our Sponsor
         </h2> */}
      <iframe
        className="my-20 h-auto overflow-y-hidden"
        src="https://api.leadconnectorhq.com/widget/form/ywpp7eH39Z3oMm17uPkM"
        id="inline-ywpp7eH39Z3oMm17uPkM"
        style={{ overflowY: "hidden" }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Donate"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-ywpp7eH39Z3oMm17uPkM"
        data-form-id="ywpp7eH39Z3oMm17uPkM"
        title="Donate"
      ></iframe>
    </div>
  );
}
