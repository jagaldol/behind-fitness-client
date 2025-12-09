import { create } from "zustand"

interface AuthState {
  userId: number
  setUserId: (value: number) => void
}

const useAuthStore = create<AuthState>((set) => ({
  userId: 0,
  setUserId: (value) => set({ userId: value }),
}))

export const useUserId = () => useAuthStore((state) => state.userId)
export const useIsLoggedIn = () => useAuthStore((state) => state.userId !== 0)
export default useAuthStore
