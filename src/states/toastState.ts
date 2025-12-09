import { ToastData } from "@/types/toast"
import { create } from "zustand"

type ToastStore = {
  toasts: ToastData[]
  addToast: (toast: ToastData) => void
  removeToast: (id: number) => void
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))

export default useToastStore
