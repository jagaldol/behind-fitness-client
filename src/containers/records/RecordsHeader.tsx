import Link from "next/link"
import { MdOutlineAddBox } from "react-icons/md"

export default function RecordsHeader() {
  return (
    <header className="fixed top-0 left-0 w-full h-14 flex justify-center py-3 max-md:px-0 bg-background/70 backdrop-blur z-10">
      <div className="w-[1000px] h-full flex items-center justify-end px-10 max-md:px-0">
        <Link href="/records/create" className="p-2 flex gap-1 items-center" scroll={false}>
          <span className="font-GmarketSansMedium pt-0.5">추가하기</span>
          <MdOutlineAddBox className="text-xl" />
        </Link>
      </div>
    </header>
  )
}
