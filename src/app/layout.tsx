import React from "react"
import "@/styles/globals.css"
import "@/styles/react-calendar.css"
import RecoilRootWrapper from "@/wrappers/RecoilRootWrapper"
import QueryClientProviderWrapper from "@/wrappers/QueryClientProviderWrapper"
import Toast from "@/components/toast/Toast"
import ModalList from "@/components/modal/ModalList"
import AxiosInterceptorWrapper from "@/wrappers/AxiosInterceptorWrapper"

export const metadata = {
  title: "Fitness | Behind",
  description: "당신만을 위한 비하인드 운동 관리 프로젝트",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex flex-col items-center justify-center">
        <QueryClientProviderWrapper>
          <RecoilRootWrapper>
            <AxiosInterceptorWrapper>
              {children}
              <Toast />
              <ModalList />
            </AxiosInterceptorWrapper>
          </RecoilRootWrapper>
        </QueryClientProviderWrapper>
      </body>
    </html>
  )
}
