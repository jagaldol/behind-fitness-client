import React from "react"
import { useRouter } from "next/navigation"
import useModalStore from "@/states/modalState"

export default function useModal() {
  const pushModal = useModalStore((state) => state.pushModal)
  const popModal = useModalStore((state) => state.popModal)
  const router = useRouter()

  const openModal = (title: string, body: React.ReactNode) => {
    pushModal({
      id: Date.now(),
      title,
      body,
    })
    history.pushState(null, "")
  }
  const onCloseModal = (href?: string) => {
    if (href) {
      router.replace(href, { scroll: false })
      popModal()
    } else router.back()
  }

  return { openModal, onCloseModal }
}
