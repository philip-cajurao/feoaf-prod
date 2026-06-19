import BackButton from "@/app/components/BackButton";

export default function SponsorAKid() {
    return (
        <div className="h-auto relative overflow-hidden">
            <div className="relative md:fixed m-8 z-50">
                <BackButton href="/sponsors" />
            </div>

            {/* <h2 className="text-4xl font-bold text-center mt-20">
        Be Our Sponsor
      </h2> */}

            <iframe
                className="my-20 h-auto overflow-y-hidden"
                style={{ overflowY: "hidden" }}
                src="https://api.leadconnectorhq.com/widget/form/OAYYgcKGhpqqdDC6M9Pi"
                id="inline-OAYYgcKGhpqqdDC6M9Pi"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Sponsor A Kid"
                width="100%"
                loading="lazy"
                data-layout-iframe-id="inline-OAYYgcKGhpqqdDC6M9Pi"
                data-form-id="OAYYgcKGhpqqdDC6M9Pi"
                title="Sponsor A Kid"

            >
            </iframe>
        </div>
    );
}
