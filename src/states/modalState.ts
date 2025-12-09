import { ModalData } from "@/types/modal"
import { create } from "zustand"

interface ModalStore {
  modals: ModalData[]
  pushModal: (modal: ModalData) => void
  popModal: () => void
  removeModalById: (id: number) => void
}

const useModalStore = create<ModalStore>((set) => ({
  modals: [],
  pushModal: (modal) =>
    set((state) => ({
      modals: [...state.modals, modal],
    })),
  popModal: () =>
    set((state) => ({
      modals: state.modals.slice(0, Math.max(0, state.modals.length - 1)),
    })),
  removeModalById: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}))

export default useModalStore
