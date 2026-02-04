import { Metadata } from "next";
import BackButton from "../../components/BackButton";

export const metadata: Metadata = {
    title: "Apply | Youth Business Loan Program",
    description: "Submit your application for a youth micro-loan.",
};

export default function LoanApplication() {
    return (
        <div className="h-auto relative overflow-hidden">
            <div className="md:fixed m-8">
                <BackButton />
            </div>


            <iframe
                src="https://api.leadconnectorhq.com/widget/form/rEDUgUKRVlSmu2XOvhN6"
                className="my-16 h-[calc(100svh-4rem)] h-auto overflow-y-hidden"
                style={{ overflowY: "hidden" }}
                id="inline-rEDUgUKRVlSmu2XOvhN6"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Youth Business Loan Application"
                data-layout-iframe-id="inline-rEDUgUKRVlSmu2XOvhN6"
                data-form-id="rEDUgUKRVlSmu2XOvhN6"
                width="100%"
                loading="lazy"
                title="Youth Business Loan Application"
            >
            </iframe>
        </div>
    );
}