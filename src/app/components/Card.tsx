import React from "react";

type CardTypes = Readonly<{
  customStyle?: string;
  image?: React.ReactNode;
  title?: string;
  body?: string;
  action?: React.ReactNode;
}>;

export default function Card({
  customStyle = "bg-primary",
  image,
  title,
  body,
  action,
}: CardTypes) {
  return (
    <div className={`card ${customStyle} w-96`}>
      {image ? <figure>{image}</figure> : null}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">{action ? action : null}</div>
      </div>
    </div>
  );
}
