/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import getConfig from "next/config"
import { useMediaQuery } from "react-responsive"
const { publicRuntimeConfig } = getConfig()

const useDesktopMediaQuery = () => {
  const { breakpoints } = publicRuntimeConfig
  return useMediaQuery({ query: `(min-width: ${breakpoints.lg}` })
}

export const useTouchDeviceMediaQuery = () => {
  return useMediaQuery({ query: `(hover: none) and (pointer: coarse)` })
}

export default useDesktopMediaQuery
