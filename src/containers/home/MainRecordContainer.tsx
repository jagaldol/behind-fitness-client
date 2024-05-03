"use client"

import React from "react"
import { useRecoilValue } from "recoil"
import selectedDateState from "@/states/selectedDateState"
import axiosInstance from "@/utils/axiosInstance"
import { SessionData } from "@/types/record"
import moment from "moment/moment"
import { useInfiniteQuery } from "@tanstack/react-query"
import MainSessionItem from "@/containers/home/MainSessionItem"

export default function MainRecordContainer() {
  const date = useRecoilValue(selectedDateState)
  const param = { date: moment(date).format("YYYY-MM-DD") }
  const { data } = useInfiniteQuery({
    initialData: undefined,
    initialPageParam: 1,
    queryKey: ["/sessions", param],
    queryFn: async ({ pageParam = 1 }) => {
      const params = { page: pageParam, ...param }

      try {
        const res = await axiosInstance.get("/sessions", { params })
        return res.data.response
      } catch {
        return null
      }
    },
    getNextPageParam: (lastPage, pages, pageNum) => {
      return lastPage.sessions.length > 0 ? pageNum + 1 : undefined
    },
  })
  return data?.pages[0]?.sessions && data?.pages[0]?.sessions.length > 0 ? (
    data?.pages.map((page) =>
      page.sessions.map((session: SessionData) => <MainSessionItem key={session.id} session={session} />),
    )
  ) : (
    <>
      <hr />
      <p className="mt-7 text-center">기록이 존재하지 않습니다.</p>
    </>
  )
}