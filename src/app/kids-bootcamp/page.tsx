import React from "react";
import BackButton from "../components/BackButton";

export default function KidsBootcamp() {
  return (
    <div className="h-auto relative overflow-hidden">
      <div className="md:fixed m-8">
        <BackButton />
      </div>

      {/* <h2 className="text-4xl font-bold text-center mt-20">
        Join Our Organization
      </h2> */}
      <iframe
        className="my-16 w-full h-auto overflow-y-hidden"
        style={{ overflowY: "hidden" }}
        src="https://api.leadconnectorhq.com/widget/form/8GdbqCQjmBlZWh0MXFfi"
        id="inline-8GdbqCQjmBlZWh0MXFfi"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Summer Event 2025"
        data-height="1359"
        data-layout-iframe-id="inline-8GdbqCQjmBlZWh0MXFfi"
        data-form-id="8GdbqCQjmBlZWh0MXFfi"
        width="100%"
        loading="lazy"
        title="Summer Event 2025"
      ></iframe>
    </div>
  );
}
