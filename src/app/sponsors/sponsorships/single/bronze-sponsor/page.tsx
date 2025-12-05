import BackButton from "@/app/components/BackButton";
import React from "react";

export default function SingleBronzeSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/xVDOJz1Foq2N60xBXBdf"
        id="inline-xVDOJz1Foq2N60xBXBdf"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="One Event Only Sponsorship - Bronze Sponsorship ($250)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-xVDOJz1Foq2N60xBXBdf"
        data-form-id="xVDOJz1Foq2N60xBXBdf"
        title="One Event Only Sponsorship - Bronze Sponsorship ($250)"
      >
      </iframe>
    </div>
  );
}
