import { ChainId } from "../constants"
import { useActiveWeb3React } from "./index"

enum Blockchain {
  // ETHEREUM = 1,
  // BINANCE_SMART_CHAIN = 2,
  HARMONY = 1,
}

export default function useBlockchain(): Blockchain {
  const { chainId } = useActiveWeb3React()
  return getBlockchain(chainId)
}

function getBlockchain(chainId: ChainId | undefined): Blockchain {
  switch (chainId) {
    case ChainId.HARMONY_MAINNET:
    case ChainId.HARMONY_TESTNET:
      return Blockchain.HARMONY
    default:
      return Blockchain.HARMONY
  }
}
