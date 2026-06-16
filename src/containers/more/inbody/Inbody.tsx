"use client"

import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import useModal from "@/hooks/useModal"
import axiosInstance from "@/utils/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import ContentBox from "@/components/ContentBox"
import AddInbodyForm from "@/containers/more/inbody/AddInbodyForm"
import { FaPlus } from "react-icons/fa6"
import Chart from "@/containers/more/inbody/Chart"
import useUserInfoQuery from "@/hooks/useUserInfoQuery"
import { genderString } from "@/utils/utils"
import { MdEdit } from "react-icons/md"
import UpdateUserInbodyInfoForm from "@/containers/more/inbody/UpdateUserInbodyInfoForm"
import moment from "moment"

type InbodyPeriod = "1y" | "2y" | "3y" | "5y" | "all"

const periodOptions: { id: InbodyPeriod; label: string; years?: number }[] = [
  { id: "1y", label: "1년", years: 1 },
  { id: "2y", label: "2년", years: 2 },
  { id: "3y", label: "3년", years: 3 },
  { id: "5y", label: "5년", years: 5 },
  { id: "all", label: "전체" },
]

export default function Inbody() {
  const router = useRouter()
  const { openModal } = useModal()
  const [selectedPeriod, setSelectedPeriod] = useState<InbodyPeriod>("3y")

  const { data, isFetched } = useQuery({
    queryKey: ["/inbody"],
    queryFn: async () => {
      return axiosInstance.get("/inbody").then((res) => res.data.response)
    },
  })

  const { userInfo } = useUserInfoQuery()
  const filteredData = useMemo(() => {
    const inbodyData = Array.isArray(data) ? data : []
    const selectedOption = periodOptions.find((option) => option.id === selectedPeriod)
    if (!selectedOption?.years) return inbodyData

    const cutoffDate = moment().subtract(selectedOption.years, "years").startOf("day")
    return inbodyData.filter((value: any) => !moment(value.date, "YYYY-MM-DD").isBefore(cutoffDate, "day"))
  }, [data, selectedPeriod])

  const chartData = useMemo(
    () => ({
      weight: filteredData.map((value: any) => ({
        x: value.date,
        y: value.weight,
        id: value.id,
      })),
      muscle: filteredData.map((value: any) => ({
        x: value.date,
        y: value.muscle,
        id: value.id,
      })),
      fat: filteredData.map((value: any) => ({
        x: value.date,
        y: value.fat,
        id: value.id,
      })),
      percentFat: filteredData.map((value: any) => ({
        x: value.date,
        y: value.percentFat,
        id: value.id,
      })),
    }),
    [filteredData],
  )

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full min-w-0 rounded-full bg-input-box p-1 sm:w-auto">
          {periodOptions.map((option) => {
            const isSelected = selectedPeriod === option.id
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedPeriod(option.id)}
                className={`h-8 min-w-0 flex-1 rounded-full px-3 text-sm transition-all sm:flex-none ${
                  isSelected ? "bg-main-theme text-white" : "text-text-gray hover:text-white"
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>
        <button
          type="button"
          onClick={() => {
            openModal("인바디 기록 추가", <AddInbodyForm />)
          }}
          className="flex h-8 items-center justify-center gap-1 rounded-full bg-main-theme px-5"
        >
          <FaPlus />
          <span>기록 추가</span>
        </button>
      </div>
      <ContentBox>
        <div className="flex h-40 w-full min-w-0 items-center overflow-hidden text-white">
          <div className="mr-1 w-7 shrink-0 text-center">
            <h2 className="text-lg">체중</h2>
            <span>(kg)</span>
          </div>
          <div className="h-full min-w-0 flex-1 overflow-hidden">
            {isFetched && <Chart id="weight" data={chartData.weight} color="#97e3d5" />}
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="flex h-40 w-full min-w-0 items-center overflow-hidden text-white">
          <div className="mr-1 w-7 shrink-0 text-center">
            <h2 className="text-lg">골격근량</h2>
            <span>(kg)</span>
          </div>
          <div className="h-full min-w-0 flex-1 overflow-hidden">
            {isFetched && <Chart id="muscle" data={chartData.muscle} color="#EFB118" />}
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="flex h-40 w-full min-w-0 items-center overflow-hidden text-white">
          <div className="mr-1 w-7 shrink-0 text-center">
            <h2 className="text-lg">체지방량</h2>
            <span>(kg)</span>
          </div>
          <div className="h-full min-w-0 flex-1 overflow-hidden">
            {isFetched && <Chart id="fat" data={chartData.fat} color="#97BBF5" />}
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="flex h-40 w-full min-w-0 items-center overflow-hidden text-white">
          <div className="mr-1 w-7 shrink-0 text-center">
            <h2 className="text-lg">체지방률</h2>
            <span>(%)</span>
          </div>
          <div className="h-full min-w-0 flex-1 overflow-hidden">
            {isFetched && <Chart id="percentFat" data={chartData.percentFat} color="#FF725C" unit="%" />}
          </div>
        </div>
      </ContentBox>

      <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_minmax(0,_3fr)] gap-y-4 gapx-1 pl-3 items-center">
        <span>성별</span>
        <span className="p-2 h-10 col-start-2 col-span-2">{genderString(userInfo?.gender)}</span>
        <span>신장</span>
        <span className="p-2 h-10">{userInfo ? `${userInfo.height}cm` : ""}</span>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              openModal("개인 데이터 변경", <UpdateUserInbodyInfoForm />)
            }}
            className="flex items-center justify-center gap-1 px-5 h-8 rounded-full bg-main-theme"
          >
            <MdEdit />
            <span>데이터 변경</span>
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          router.push("/more", { scroll: false })
        }}
        className="w-full h-10 rounded-full bg-main-theme"
      >
        확인
      </button>
    </div>
  )
}
