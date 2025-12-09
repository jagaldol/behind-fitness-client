import useToastStore from "@/states/toastState"

export default function useToast() {
  const addToast = useToastStore((state) => state.addToast)

  const addSuccessToast = (message: string) => {
    addToast({
      id: Date.now(),
      type: "success",
      message,
    })
  }
  const addWarningToast = (message: string) => {
    addToast({
      id: Date.now(),
      type: "warning",
      message,
    })
  }
  const addErrorToast = (message: string) => {
    addToast({
      id: Date.now(),
      type: "error",
      message,
    })
  }

  return { addSuccessToast, addWarningToast, addErrorToast }
}
