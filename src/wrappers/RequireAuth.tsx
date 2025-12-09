"use client"

import useAuthStore from "@/states/auth"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { getJwtPayload } from "@/utils/jwtDecoder"
import useLogout from "@/hooks/useLogout"
import useToast from "@/hooks/useToast"

export default function RequireAuth({ children }: { children: ReactNode }) {
  const setUserId = useAuthStore((state) => state.setUserId)
  const logout = useLogout()
  const router = useRouter()

  const { addWarningToast } = useToast()

  useEffect(() => {
    const payload = getJwtPayload()
    if (payload) {
      setUserId(payload.sub)
    } else {
      addWarningToast("로그인이 필요합니다.")
      logout()
      router.replace("/login")
    }
  }, [setUserId, logout, router, addWarningToast])

  return children
}
