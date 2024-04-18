"use client"

import React, { forwardRef, HTMLInputTypeAttribute, useRef } from "react"
import axiosInstance from "@/hooks/axiosInstance"
import { useSetRecoilState } from "recoil"
import { useRouter } from "next/navigation"
import isLoginState from "@/state/auth"
import { saveJwt } from "@/utils/jwtDecoder"

const Field = forwardRef(
  (
    {
      label,
      id,
      type,
    }: {
      label: string
      id: string
      type: HTMLInputTypeAttribute
    },
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          autoComplete="on"
          className="w-full p-2 bg-input-box border border-gray-100 rounded-md h-14 mt-2"
          required
          ref={ref}
        />
      </label>
    )
  },
)

export default function LoginForm() {
  const setLogin = useSetRecoilState(isLoginState)
  const router = useRouter()
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      className="w-[350px] flex flex-col gap-10"
      onSubmit={(e) => {
        e.preventDefault()
        const email = emailInputRef?.current?.value
        const password = passwordInputRef?.current?.value
        axiosInstance
          .post("/login", { email, password })
          .then((res) => {
            const jwt = res.headers.authorization
            saveJwt(jwt)
            setLogin(true)
            router.push("/")
          })
          .catch((res) => {
            if (res.response.data.response === "LOGIN_FAILED") alert("이메일 혹은 비밀번호가 틀렸습니다.")
            else alert(res.response.data.errorMessage)
          })
      }}
    >
      <div className="flex flex-col gap-4">
        <Field label="이메일" id="email" type="text" ref={emailInputRef} />
        <Field label="비밀번호" id="password" type="password" ref={passwordInputRef} />
      </div>
      <button type="submit" className="w-full h-14 rounded-full bg-main-theme">
        로그인
      </button>
    </form>
  )
}