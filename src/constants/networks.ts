import { ChainId } from "./index"

export const NETWORK_LABEL: Partial<Record<ChainId, string>> = {
  [ChainId.MAINNET]: "Ethereum",
  [ChainId.ARBITRUM]: "Arbitrum",
  [ChainId.ROPSTEN]: "Ropsten",
  [ChainId.HARDHAT]: "Hardhat 👷🏼‍♂️",
  [ChainId.HARMONY_MAINNET]: "Harmony Mainnet",
  [ChainId.HARMONY_TESTNET]: "Harmony Testnet",
}
