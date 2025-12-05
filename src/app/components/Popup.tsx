"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation";
import Image from "next/image";
import supportkids from "../assets/support-kids.jpg"

export default function Popup() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const navigate = useRouter();

    useEffect(() => {
        modalRef.current?.showModal();
    }, []);

    return (
        <div>
            <dialog id="my_modal_1" ref={modalRef} className="modal">
                <div className="card modal-box p-0 rounded-lg bg-base-100 w-56 sm:w-96 shadow-xl relative">
                    <figure>
                        <Image
                        src={supportkids}
                        alt="Support Kids"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sponsor a Future Entrepreneur!</h2>
                        <p>Support a Kid to Build Their Dreams and Build a Legacy</p>
                        <div className="card-actions justify-between modal-action">
                            <form method="dialog">
                                <button className="btn btn-link no-underline text-neutral decoration-transparent">Close</button>
                            </form>
                            <form method="dialog">
                                <div className="border rounded-lg">
                                    <button className="btn btn-accent rounded-lg" onClick={() => navigate.push('/sponsors')}>Learn more</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
