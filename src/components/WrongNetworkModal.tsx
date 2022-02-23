import { Dialog, DialogContent, Typography } from "@mui/material"
import React, { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import { ChainId } from "../constants"
import { useActiveWeb3React } from "../hooks"
import { NETWORK_LABEL } from "../constants/networks"
import { SUPPORTED_NETWORKS } from "./SiteSettingsMenu"
import Button from "./Button"

interface Props {
  open?: boolean
}

export default function WrongNetworkModal({ open }: Props): ReactElement {
  // const isUnsupportChainIdError = error instanceof UnsupportedChainIdError
  const { t } = useTranslation()
  const { chainId, library, account } = useActiveWeb3React()
  const params = SUPPORTED_NETWORKS[ChainId.HARMONY_MAINNET]
  const isUnsupportChainIdError = NETWORK_LABEL[chainId as ChainId] == undefined

  return (
    <Dialog open={open ?? isUnsupportChainIdError} maxWidth="xs">
      <DialogContent sx={{ whiteSpace: "pre-line" }}>
        <Typography textAlign="center" mb={3} sx={{ fontSize: 48 }}>
          &#129325;
        </Typography>
        <Typography>{t("wrongNetworkContent")}</Typography>
        <Button
          onClick={() => {
            void library?.send("wallet_addEthereumChain", [params, account])
          }}
        >
          Harmony Mainnet
        </Button>
      </DialogContent>
    </Dialog>
  )
}
