import { ChainId } from "./index"

export const NETWORK_LABEL: Partial<Record<ChainId, string>> = {
  [ChainId.MAINNET]: "Ethereum",
  [ChainId.ARBITRUM]: "Arbitrum",
  [ChainId.ROPSTEN]: "Ropsten",
  [ChainId.HARDHAT]: "Hardhat 👷🏼‍♂️",
  [ChainId.ARBITRUM_TESTNET]: "Arbitrum Test",
  [ChainId.HARMONY_MAINNET]: "Harmony",
  [ChainId.HARMONY_TESTNET]: "Harmony Test",
}
