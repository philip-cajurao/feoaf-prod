import BackButton from "@/app/components/BackButton";
import React from "react";

export default function SingleGoldSponsor() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      <iframe
        className="my-20 h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/iK2mIho44BR3pEiJbXF0"
        id="inline-iK2mIho44BR3pEiJbXF0"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="One Event Only Sponsorship - Gold Sponsorship ($500)"
        width="100%"
        loading="lazy"
        data-layout-iframe-id="inline-iK2mIho44BR3pEiJbXF0"
        data-form-id="iK2mIho44BR3pEiJbXF0"
        title="One Event Only Sponsorship - Gold Sponsorship ($500)"
      >
      </iframe>
    </div>
  );
}
