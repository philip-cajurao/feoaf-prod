import React from "react";
import BackButton from "../../components/BackButton";

export default function Join() {
    return (
        <div className="h-auto relative overflow-hidden">
            <div className="md:fixed m-8">
                <BackButton />
            </div>

            {/* <h2 className="text-4xl font-bold text-center mt-20">
        Join Our Organization
      </h2> */}

            <iframe
                className="mt-8 h-[calc(100svh-4rem)] h-auto overflow-y-hidden"
                src="https://api.leadconnectorhq.com/widget/form/sm8S1iZ6ePCh8V8PZoNK"
                style={{ overflowY: "hidden" }}
                id="inline-sm8S1iZ6ePCh8V8PZoNK"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FEOAF Academic & Young Entrepreneur Scholarship Application"
                width="100%"
                loading="lazy"
                data-layout-iframe-id="inline-sm8S1iZ6ePCh8V8PZoNK"
                data-form-id="sm8S1iZ6ePCh8V8PZoNK"
                title="FEOAF Academic & Young Entrepreneur Scholarship Application"
            >
            </iframe>

        </div>
    );
}
