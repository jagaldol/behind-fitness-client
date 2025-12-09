"use client"

import { useEffect } from "react"
import useModalStore from "@/states/modalState"
import { ModalData } from "@/types/modal"
import Modal from "@/components/modal/Modal"

function ModalList() {
  const modalList = useModalStore((state) => state.modals)
  const popModal = useModalStore((state) => state.popModal)

  useEffect(() => {
    const handlePopState = () => {
      popModal()
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [popModal])

  return modalList.map((item: ModalData, idx) => <Modal key={item.id} zIndex={idx + 100} modalData={item} />)
}

export default ModalList
