import { create } from "zustand"

type SelectedDateState = {
  selectedDate: Date
  setSelectedDate: (value: Date) => void
}

const useSelectedDateStore = create<SelectedDateState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (value) => set({ selectedDate: value }),
}))

export default useSelectedDateStore
