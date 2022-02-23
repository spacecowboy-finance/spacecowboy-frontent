import { ChainId } from "../constants"

export function getEtherscanLink(
  data: string,
  type: "tx" | "token" | "address" | "block",
): string {
  return `https://etherscan.io/${type}/${data}`
}

const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
  // 1: "",
  // 3: "ropsten.",
  // 4: "rinkeby.",
  // 5: "goerli.",
  // 42: "kovan.",
  31337: "Hardhat.",
  // 42161: "Arbitrum.",
  // 421611: "Arbitrum Testnet",
  1666600000: "explorer.harmony.one/#",
  1666700000: "explorer.testnet.harmony.one/#",
  99999999999: "Mainnet",
}

export function getEtherscanLinkViper(
  chainId: ChainId,
  data: string,
  type: "transaction" | "token" | "address" | "block",
): string {
  const prefix = `https://${
    ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1666600000]
  }`
  // prefix = [56, 97, 1666600000, 1666700000].includes(chainId)
  //   ? prefix
  //   : `${prefix}etherscan.io`

  switch (type) {
    case "transaction": {
      return `${prefix}/tx/${data}`
    }
    case "token": {
      return `${prefix}/token/${data}`
    }
    case "block": {
      return `${prefix}/block/${data}`
    }
    case "address":
    default: {
      return `${prefix}/address/${data}`
    }
  }
}
