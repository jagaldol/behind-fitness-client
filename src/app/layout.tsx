import React from "react"
import "@/styles/globals.css"
import RecoilRootWrapper from "@/components/RecoilRootWrapper"
import QueryClientProviderWrapper from "@/components/QueryClientProviderWrapper"

export const metadata = {
  title: "Fitness | Behind",
  description: "당신만을 위한 비하인드 운동 관리 프로젝트",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <QueryClientProviderWrapper>
        <RecoilRootWrapper>
          <body>{children}</body>
        </RecoilRootWrapper>
      </QueryClientProviderWrapper>
    </html>
  )
}
