import BackButton from "@/app/components/BackButton";
import React from "react";

export interface GhlFormProps {
  /** The GoHighLevel / LeadConnector form ID */
  formId: string;
  /** The form title / name used for iframe accessibility & data attributes */
  title: string;
  /** Custom destination path for the back button (defaults to "/sponsors") */
  backHref?: string;
  /** Whether to display the BackButton (defaults to true) */
  showBackButton?: boolean;
  /** Optional custom CSS classes for the container div */
  containerClassName?: string;
  /** Optional custom CSS classes for the iframe element */
  iframeClassName?: string;
  /** Optional data-height attribute for GHL widget sizing */
  dataHeight?: string;
}

export default function GhlForm({
  formId,
  title,
  backHref = "/sponsors",
  showBackButton = true,
  containerClassName = "h-auto relative overflow-hidden",
  iframeClassName = "my-20 h-auto overflow-y-hidden",
  dataHeight,
}: GhlFormProps) {
  const iframeId = `inline-${formId}`;
  const iframeSrc = `https://api.leadconnectorhq.com/widget/form/${formId}`;

  return (
    <div className={containerClassName}>
      {showBackButton && (
        <div className="relative md:fixed m-8 z-50">
          <BackButton href={backHref} />
        </div>
      )}

      <iframe
        className={iframeClassName}
        style={{ overflowY: "hidden" }}
        src={iframeSrc}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={title}
        data-height={dataHeight}
        width="100%"
        loading="lazy"
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title={title}
      />
    </div>
  );
}
