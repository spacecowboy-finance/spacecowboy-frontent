import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"
import { PopupContent } from "../actions"
import { SwapStatsReponse } from "../../utils/getSwapStats"

interface GasPrices {
  gasStandard?: number
  gasFast?: number
  gasInstant?: number
}
interface SwapStats {
  [swapAddress: string]: {
    oneDayVolume: string
    apy: string
    tvl: string
    utilization: string
  }
}
export interface TokenPricesUSD {
  [tokenSymbol: string]: number
}
interface LastTransactionTimes {
  [transactionType: string]: number
}
interface BlockNumberPayload {
  chainId: number
  blockNumber: number
}
interface AddPopup {
  content: PopupContent
  key: string | undefined
}
interface RemovePopup {
  key: string | undefined
}

type PopupList = Array<{
  key: string
  show: boolean
  content: PopupContent
  removeAfterMs: number | null
}>

type ApplicationState = GasPrices & { tokenPricesUSD?: TokenPricesUSD } & {
  lastTransactionTimes: LastTransactionTimes
} & { swapStats?: SwapStats } & { popupList: PopupList } & {
  readonly blockNumber: { readonly [chainId: number]: number }
}

const initialState: ApplicationState = {
  lastTransactionTimes: {},
  popupList: [],
  blockNumber: {},
}

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    updateBlockNumber(state, action: PayloadAction<BlockNumberPayload>): void {
      const { chainId, blockNumber } = action.payload
      if (typeof state.blockNumber[chainId] !== "number") {
        state.blockNumber[chainId] = blockNumber
      } else {
        state.blockNumber[chainId] = Math.max(
          blockNumber,
          state.blockNumber[chainId],
        )
      }
    },
    addPopup(state, action: PayloadAction<AddPopup>): void {
      const { content, key } = action.payload
      const removeAfterMs = 15000
      state.popupList = (
        key
          ? state.popupList.filter((popup) => popup.key !== key)
          : state.popupList
      ).concat([
        {
          key: key || nanoid(),
          show: true,
          content,
          removeAfterMs,
        },
      ])
    },
    removePopup(state, action: PayloadAction<RemovePopup>): void {
      const { key } = action.payload
      state.popupList.forEach((p) => {
        if (p.key === key) {
          p.show = false
        }
      })
    },
    updateGasPrices(state, action: PayloadAction<GasPrices>): void {
      const { gasStandard, gasFast, gasInstant } = action.payload
      state.gasStandard = gasStandard
      state.gasFast = gasFast
      state.gasInstant = gasInstant
    },
    updateTokensPricesUSD(state, action: PayloadAction<TokenPricesUSD>): void {
      state.tokenPricesUSD = action.payload
    },
    updateLastTransactionTimes(
      state,
      action: PayloadAction<LastTransactionTimes>,
    ): void {
      state.lastTransactionTimes = {
        ...state.lastTransactionTimes,
        ...action.payload,
      }
    },
    updateSwapStats(state, action: PayloadAction<SwapStatsReponse>): void {
      const formattedPayload = Object.keys(action.payload).reduce(
        (acc, key) => {
          const { APY, TVL, oneDayVolume: ODV } = action.payload[key]
          if (isNaN(APY) || isNaN(TVL) || isNaN(ODV)) {
            return acc
          }
          const apy = APY.toFixed(18)
          const tvl = TVL.toFixed(18)
          const oneDayVolume = ODV.toFixed(18)
          const utilization = (TVL > 0 ? ODV / TVL : 0).toFixed(18)
          return {
            ...acc,
            [key]: {
              apy,
              tvl,
              oneDayVolume,
              utilization,
            },
          }
        },
        {},
      )
      state.swapStats = formattedPayload
    },
  },
})

export const {
  updateBlockNumber,
  addPopup,
  removePopup,
  updateGasPrices,
  updateTokensPricesUSD,
  updateLastTransactionTimes,
  updateSwapStats,
} = applicationSlice.actions

export default applicationSlice.reducer
