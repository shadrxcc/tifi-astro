
interface props {
  item: {
    title: string
    body: string
  }

}
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import DetailOpenI from "./../assets/icons/detail_open.svg"
import DetailCloseI from "./../assets/icons/detail_close.svg"
function DetailCard({item: {title, body}}: props) {
  const detailStyle = {
  
  }
  const ref = useRef<HTMLDetailsElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const clickDisable = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`py-[44.33px] px-8 bg-[#F2F4F7] rounded-lg flex justify-between gap-4 items-center ${!isOpen ? 'items-stretch' : "items-start"}`}>
      <details open ref={ref} style={detailStyle} className="w-full flex flex-col gap-8">
          <summary onClick={clickDisable} className="list-none flex justify-between font-sans text-[22px] leading-[33px] text-[#1D2939] font-bold">
            {title}
          </summary>
          <AnimatePresence initial={false}>
            {
              isOpen && (
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg">{body}</motion.p>
              )
            }
          </AnimatePresence>
      </details>
      <motion.div layout onClick={clickHandler} className={"cursor-pointer"}>
        <img src={(!isOpen ? DetailOpenI.src : DetailCloseI.src ) as string}/>
      </motion.div>
    </div>
  );
}

export default DetailCard;