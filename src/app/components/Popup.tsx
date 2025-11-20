"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation";

export default function Popup() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const navigate = useRouter();

    useEffect(() => {
        modalRef.current?.showModal();
    }, []);

    return (
        <div>
            <dialog id="my_modal_1" ref={modalRef} className="modal">
                <div className="card modal-box p-0 rounded-lg bg-base-100 w-96 shadow-xl relative">
                    <figure>
                        <img
                            src="https://img1.wsimg.com/isteam/getty/1807943094/:/cr=t:9.6%25,l:0%25,w:100%25,h:80.81%25/rs=w:515,h:234,cg:true"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sponsor a Future Entrepreneurs!</h2>
                        <p>Sponsor a future Entrepreneur.</p>
                        <p>Sponsor a dream.  Build  a Legacy.</p>
                        <div className="card-actions justify-between modal-action">
                            <form method="dialog">
                                <button className="btn btn-link no-underline text-neutral decoration-transparent">Close</button>
                            </form>
                            <form method="dialog">
                                <div className="border rounded-lg">
                                    <button className="btn btn-accent rounded-lg" onClick={() => navigate.push('/sponsors')}>Support Kids</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
