import { deleteJwt } from "@/utils/jwtDecoder"
import useAuthStore from "@/states/auth"

export default function useLogout() {
  const setUserId = useAuthStore((state) => state.setUserId)

  return () => {
    setUserId(0)
    deleteJwt()
  }
}
