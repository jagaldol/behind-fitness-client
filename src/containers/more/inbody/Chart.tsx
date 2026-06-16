"use client"

import { ResponsiveLine } from "@nivo/line"
import type { PointOrSliceMouseHandler, PointOrSliceTouchHandler } from "@nivo/line"
import { useState } from "react"
import useModal from "@/hooks/useModal"
import UpdateInbodyForm from "@/containers/more/inbody/UpdateInbodyForm"
import moment from "moment/moment"

interface InbodyDatum {
  x: string
  y: number
  id: string | number
}

interface InbodyLineSeries {
  id: string
  data: InbodyDatum[]
}

interface TooltipState {
  x: number
  y: number
  date: string
  value: string
  color: string
}

const theme = {
  text: {
    fill: "#FFFFFF",
  },
  tooltip: {
    container: {
      background: "#555555",
      color: "#fff",
    },
  },
  crosshair: {
    line: {
      stroke: "#FFFFFF",
    },
  },
}

function ViewportTooltip({ tooltip }: { tooltip: TooltipState | null }) {
  if (!tooltip) return null

  const padding = 8
  const offset = 14
  const tooltipWidth = 220
  const tooltipHeight = 32
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const clampedWidth = Math.min(tooltipWidth, viewportWidth - padding * 2)
  const maxLeft = Math.max(padding, viewportWidth - clampedWidth - padding)
  const maxTop = Math.max(padding, viewportHeight - tooltipHeight - padding)
  const preferredTop =
    tooltip.y - tooltipHeight - offset >= padding ? tooltip.y - tooltipHeight - offset : tooltip.y + offset
  const left = Math.min(Math.max(tooltip.x - clampedWidth / 2, padding), maxLeft)
  const top = Math.min(Math.max(preferredTop, padding), maxTop)

  return (
    <div
      className="pointer-events-none fixed z-[80] box-border flex h-8 max-w-[calc(100vw-16px)] items-center gap-2 overflow-hidden rounded-sm bg-[#555555] px-2 text-sm text-white shadow-md"
      style={{ left, top, width: tooltipWidth }}
      role="tooltip"
    >
      <span className="h-3 w-3 shrink-0" style={{ backgroundColor: tooltip.color }} />
      <span className="min-w-0 truncate">
        {tooltip.date}: <strong>{tooltip.value}</strong>
      </span>
    </div>
  )
}

export default function Chart({
  id,
  data,
  color,
  unit = "kg",
}: {
  id: string
  data: InbodyDatum[]
  color: string
  unit?: string
}) {
  const { openModal } = useModal()
  const chartData: InbodyLineSeries[] = [{ id, data }]
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const pointSize = data.length > 48 ? 4 : data.length > 24 ? 6 : 8

  if (data.length === 0) return <div className="w-full text-center text-text-gray">기록을 추가해주세요</div>
  const minY = Math.min(...data.map((d) => Number(d.y))) - 0.1
  const maxY = Math.max(...data.map((d) => Number(d.y))) + 0.1
  const interval = (maxY - minY) / 3
  const yValues = [minY, minY + interval, minY + 2 * interval, maxY].map((value) => Math.round(value * 10) / 10)

  const uniqueYValues = [yValues[0]]

  for (let i = 1; i < yValues.length; i += 1) {
    if (yValues[i] !== uniqueYValues[uniqueYValues.length - 1]) {
      uniqueYValues.push(yValues[i])
    }
  }

  const allDates = data.map((point) => moment(point.x, "YYYY-MM-DD"))
  const minDate = moment.min(allDates).startOf("month")
  const maxDate = moment.max(allDates).add(1, "month").startOf("month")

  const totalMonths = maxDate.diff(minDate, "months") + 1
  const maxXAxisTicks = data.length > 48 ? 6 : 7
  const targetTickCount = Math.min(maxXAxisTicks, totalMonths)
  const monthInterval = Math.max(1, Math.ceil((totalMonths - 1) / Math.max(targetTickCount - 1, 1)))
  const months = []
  for (let currentMonth = minDate.clone(); currentMonth < maxDate; currentMonth.add(monthInterval, "month")) {
    months.push(currentMonth.toDate())
  }
  if (!moment(months[months.length - 1]).isSame(maxDate, "month")) {
    if (months.length < maxXAxisTicks) {
      months.push(maxDate.toDate())
    } else {
      months[months.length - 1] = maxDate.toDate()
    }
  }

  const updateTooltip = (point: Readonly<{ data: InbodyDatum; seriesColor: string }>, x: number, y: number) => {
    setTooltip({
      x,
      y,
      date: moment(point.data.x).format("YY년 M월 D일"),
      value: `${String(point.data.y)}${unit}`,
      color: point.seriesColor,
    })
  }

  const handleMouseTooltip: PointOrSliceMouseHandler<InbodyLineSeries> = (datum, event) => {
    if (!("data" in datum) || !("seriesColor" in datum)) return
    updateTooltip(datum, event.clientX, event.clientY)
  }

  const handleTouchTooltip: PointOrSliceTouchHandler<InbodyLineSeries> = (datum, event) => {
    if (!("data" in datum) || !("seriesColor" in datum)) return
    const touch = event.touches[0] ?? event.changedTouches[0]
    if (!touch) return
    updateTooltip(datum, touch.clientX, touch.clientY)
  }

  return (
    <div className="relative h-full w-full min-w-0 overflow-hidden">
      <ResponsiveLine
        data={chartData}
        margin={{ top: 10, right: 22, bottom: 54, left: 36 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day",
          min: minDate.toDate(),
          max: maxDate.toDate(),
        }}
        yScale={{
          type: "linear",
          min: minY,
          max: maxY,
        }}
        xFormat="time:%Y-%m-%d"
        enableGridX={false}
        colors={[`${color}`]}
        pointSize={pointSize}
        axisLeft={{
          tickValues: uniqueYValues,
        }}
        axisBottom={{
          tickRotation: 90,
          format: (date) => moment(date).format("YY.M.D"),
          tickValues: months,
        }}
        gridYValues={uniqueYValues}
        tooltip={() => null}
        onMouseEnter={handleMouseTooltip}
        onMouseMove={handleMouseTooltip}
        onMouseLeave={() => setTooltip(null)}
        onTouchStart={handleTouchTooltip}
        onTouchMove={handleTouchTooltip}
        onTouchEnd={() => setTooltip(null)}
        onClick={(point: any) => {
          setTooltip(null)
          openModal("인바디 기록 수정", <UpdateInbodyForm id={point.data.id} />)
        }}
        useMesh
        theme={theme}
      />
      <ViewportTooltip tooltip={tooltip} />
    </div>
  )
}
