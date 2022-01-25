/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react"
import "./Dots.scss"
import { classNames } from "../functions/styling"

interface DotsProps {
  children?: any
  className?: string
}

export default function Dots({ children = <span />, className }: DotsProps) {
  return (
    <>
      <span
        className={classNames(
          "after:inline-block dots after:animate-ellipsis after:w-4 after:text-left",
          className,
        )}
      >
        {children}
      </span>
    </>
  )
}
