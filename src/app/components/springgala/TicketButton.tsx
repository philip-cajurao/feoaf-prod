import React from "react";

export default function TicketButton() {
  return (
    <a
      href=" https://join.feoaf.org/springgala2025"
      className="mx-auto flex items-center justify-center z-10 p-4 rounded-sm
      bg-neutral text-neutral-content hover:bg-neutral/95 group cursor-pointer
      relative overflow-hidden border-2 border-[#09090b]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <svg
          className="w-6 h-6 mr-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.5 12A2.5 2.5 0 0 1 21 9.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 1 0 5V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.5a2.5 2.5 0 0 1-2.5-2.5Z"
          />
        </svg>
      </span>
      Buy a ticket
    </a>
  );
}
