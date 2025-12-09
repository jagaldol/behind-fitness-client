import React, { useState } from "react"
import { SetData } from "@/types/record"
import axiosInstance from "@/utils/axiosInstance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { MdDelete } from "react-icons/md"
import useToast from "@/hooks/useToast"

interface SetDataForm {
  weight: string
  count: string
  countUnit: string
}

export default function UpdateSetData({ data, sessionId, idx }: { data: SetData; sessionId: number; idx: number }) {
  const queryClient = useQueryClient()
  const { addSuccessToast } = useToast()
  const { mutate: setDataMutate } = useMutation({
    mutationFn: (body: any) => axiosInstance.put(`/sessions/records/sets/${data.id}`, body),
  })

  const { mutate: deleteDataMutate } = useMutation({
    mutationFn: () => axiosInstance.delete(`/sessions/records/sets/${data.id}`),
  })

  const [set, setSet] = useState<SetDataForm>({
    weight: data.weight ? data.weight.toString() : "0",
    count: data.count ? data.count.toString() : "0",
    countUnit: data.countUnit,
  })

  const onBlurred = (label: string, value: any) => {
    void setDataMutate(
      { [label]: value },
      {
        onSuccess: () => void queryClient.invalidateQueries({ queryKey: [`/sessions/${sessionId}`] }),
        onError: () =>
          setSet({
            weight: data.weight.toString(),
            count: data.count.toString(),
            countUnit: data.countUnit,
          }),
      },
    )
  }

  return (
    set && (
      <>
        <span className="text-text-gray">{`${idx + 1}세트`}</span>
        <input
          className="text-end bg-input-box px-3 py-1 rounded-md"
          type="tel"
          value={set.weight}
          onFocus={() => {
            setSet((prevState) => ({
              ...prevState,
              weight: "",
            }))
          }}
          onChange={(e) => {
            setSet((prevState) => ({
              ...prevState,
              weight: e.target.value,
            }))
          }}
          onBlur={() => {
            const { weight } = set
            const trimWeight = weight.replaceAll(" ", "")
            if (trimWeight === "") {
              setSet((prevState) => ({
                ...prevState,
                weight: data.weight.toString(),
              }))
              return
            }
            if (data.weight.toString() !== trimWeight) onBlurred("weight", trimWeight)

            setSet((prevState) => ({
              ...prevState,
              weight: trimWeight,
            }))
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur()
          }}
        />
        <span className="px-1">kg</span>
        <input
          className="text-end bg-input-box px-3 py-1 rounded-md"
          type="number"
          value={set.count}
          onFocus={() => {
            setSet((prevState) => ({
              ...prevState,
              count: "",
            }))
          }}
          onChange={(e) => {
            setSet((prevState) => ({
              ...prevState,
              count: e.target.value,
            }))
          }}
          onBlur={() => {
            const { count } = set
            if (count === "") {
              setSet((prevState) => ({
                ...prevState,
                count: data.count.toString(),
              }))
            } else if (data.count.toString() !== count) onBlurred("count", count)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur()
          }}
        />
        <span className="px-1">{set.countUnit}</span>

        <button
          type="button"
          aria-label="삭제"
          onClick={() =>
            void deleteDataMutate(undefined, {
              onSuccess: () => {
                void queryClient.invalidateQueries({ queryKey: [`/sessions/${sessionId}`] })
                addSuccessToast("삭제되었습니다.")
              },
            })
          }
        >
          <MdDelete className="text-main-theme text-lg" />
        </button>
      </>
    )
  )
}
