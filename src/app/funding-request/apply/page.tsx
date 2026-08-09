import { Metadata } from "next";
import GhlForm from "@/app/components/GhlForm";

export const metadata: Metadata = {
    title: "Apply | Youth Business Loan Program",
    description: "Submit your application for a youth micro-loan.",
};

export default function LoanApplication() {
    return (
        <GhlForm
            formId="rEDUgUKRVlSmu2XOvhN6"
            title="Youth Business Loan Application"
            backHref="/funding-request"
            iframeClassName="my-16 h-[calc(100svh-4rem)] h-auto overflow-y-hidden"
        />
    );
}