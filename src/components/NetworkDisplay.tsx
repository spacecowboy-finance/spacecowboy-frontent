import { ChainId, IS_L2_SUPPORTED } from "../constants"
import React, { ReactElement } from "react"
import { useWeb3React } from "@web3-react/core"
// import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"

import Button from "./Button"
import { NETWORK_LABEL } from "../constants/networks"
import classnames from "classnames"
import styles from "./NetworkDisplay.module.scss"

export default function NetworkDisplay({
  onClick,
}: {
  onClick: () => void
}): ReactElement | null {
  const { active, chainId } = useWeb3React()
  const networkLabel: string =
    (chainId ? NETWORK_LABEL[chainId as ChainId] : undefined) ??
    "Unupported chain"
  // const isUnsupportChainIdError = error instanceof UnsupportedChainIdError
  const isUnsupportChainIdError = NETWORK_LABEL[chainId as ChainId] == undefined

  return IS_L2_SUPPORTED ? (
    <Button
      data-testid="networkDisplayBtn"
      kind="ghost"
      size="medium"
      onClick={onClick}
    >
      <div
        className={classnames(styles.circle, {
          [styles.wrong]: isUnsupportChainIdError,
          [styles.active]: active,
        })}
      ></div>{" "}
      {networkLabel}
    </Button>
  ) : null
}
