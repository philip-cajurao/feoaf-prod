import BackButton from "@/app/components/BackButton";
import React from "react";

export default function JoinAnnualHolidayEvent() {
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
                src="https://api.leadconnectorhq.com/widget/form/3GkhVXTtRDKRl2wUuu3C"
                style={{ overflowY: "hidden" }}
                id="inline-3GkhVXTtRDKRl2wUuu3C"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="RSVP - 12/06/25"
                width="100%"
                loading="lazy"
                data-layout-iframe-id="inline-3GkhVXTtRDKRl2wUuu3C"
                data-form-id="3GkhVXTtRDKRl2wUuu3C"
                title="RSVP - 12/06/25"
            >
            </iframe>
        </div>
    );
}
