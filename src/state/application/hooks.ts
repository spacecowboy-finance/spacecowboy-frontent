/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PopupContent } from "./actions"
import { useActiveWeb3React } from "../../hooks"
import { AppState } from "../index"
import { addPopup, removePopup } from "./application"

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()

  return useSelector(
    (state: AppState) => state.application.blockNumber[chainId ?? -1],
  )
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string) => void {
  const dispatch = useDispatch()

  return useCallback(
    (content: PopupContent, key?: string) => {
      dispatch(addPopup({ content, key }))
    },
    [dispatch],
  )
}

// returns a function that allows removing a popup via its key
export function useRemovePopup(): (key: string) => void {
  const dispatch = useDispatch()
  return useCallback(
    (key: string) => {
      dispatch(removePopup({ key }))
    },
    [dispatch],
  )
}

// get the list of active popups
export function useActivePopups(): AppState["application"]["popupList"] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter((item) => item.show), [list])
}
