import { ReactNode } from "react"

export default function LimitedWidthLayout({ children }: { children: ReactNode }) {
  return <div className="pb-10 lg:w-[1000px] w-full flex flex-col items-center px-3">{children}</div>
}
