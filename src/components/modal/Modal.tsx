"use client"

import React from "react"
import { MdClose } from "react-icons/md"
import { ModalData } from "@/types/modal"
import useModal from "@/hooks/useModal"

interface Props {
  modalData: ModalData
  zIndex: number
}

function Modal({ modalData, zIndex = 100 }: Props) {
  const { onCloseModal } = useModal()
  return (
    <div
      style={{ zIndex }}
      className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30 p-3"
    >
      <div className="max-h-[calc(100dvh-1.5rem)] w-full max-w-[calc(100vw-1.5rem)] overflow-x-hidden overflow-y-auto rounded-2xl border border-text-gray/10 bg-content-box p-3 shadow-2xl sm:w-auto">
        <div className="flex w-full items-center justify-between">
          <h2 className="mr-7 min-w-0 truncate text-lg font-GmarketSansMedium">{modalData.title}</h2>
          <button
            type="button"
            className="shrink-0 rounded-full text-2xl font-bold transition-all hover:brightness-75"
            onClick={() => onCloseModal()}
            aria-label="Modal Close"
          >
            <MdClose />
          </button>
        </div>
        <hr />
        <section className="overflow-x-hidden px-2 py-5">{modalData.body}</section>
      </div>
    </div>
  )
}

export default Modal
