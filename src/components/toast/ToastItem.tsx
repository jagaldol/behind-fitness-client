"use client"

import { ToastData } from "@/types/toast"
import React, { useEffect, useState } from "react"
import useToastStore from "@/states/toastState"

interface Props {
  toastData: ToastData
  backgroundColor: string
  icon: React.ReactNode
}

function ToastItem({ toastData, backgroundColor, icon }: Props): JSX.Element {
  const { id, message } = toastData
  const [visible, setVisible] = useState(false)

  const removeToast = useToastStore((state) => state.removeToast)

  useEffect(() => {
    const showTimer = requestAnimationFrame(() => {
      setVisible(true)
    })
    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 2000)
    const removeTimer = setTimeout(() => {
      removeToast(id)
    }, 2300)

    return () => {
      cancelAnimationFrame(showTimer)
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [id, removeToast])

  return (
    <div
      className={`flex items-center w-[320px] py-4  pl-3 rounded-md text-white ${backgroundColor} shadow-sm 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"} transition-all duration-300 
      max-md:w-[250px] max-md:text-sm`}
    >
      <div className="mr-4 max-md:mr-1">{icon}</div>
      {message}
    </div>
  )
}

export default ToastItem
