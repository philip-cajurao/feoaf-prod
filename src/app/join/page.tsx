import React from "react";
import BackButton from "../components/BackButton";

export default function Join() {
  return (
    <div className="h-[1200px] relative overflow-hidden">
      <div className="md:fixed m-8">
          <BackButton />
      </div>

      {/* <h2 className="text-4xl font-bold text-center mt-20">
        Member Registration
      </h2> */}

      <iframe
        className="h-[calc(100svh-4rem)] mt-10 overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/pJ9SBOja8uLofySH2b8B"
        id="inline-pJ9SBOja8uLofySH2b8B"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Questionnaire For Kids"
        data-layout-iframe-id="popup-pJ9SBOja8uLofySH2b8B"
        data-form-id="pJ9SBOja8uLofySH2b8B"
        width="100%"
        loading="lazy"
        title="Questionnaire For Kids"
      ></iframe>
    </div>
  );
}
