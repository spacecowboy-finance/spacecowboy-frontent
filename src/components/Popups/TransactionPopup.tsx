/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react"
import { AlertCircle, CheckCircle } from "react-feather"
import styled from "styled-components"
import { useActiveWeb3React } from "../../hooks"
import { TextWrapper } from "../../theme/index"
import ExternalLink from "../../theme/viperComponents"
import { getEtherscanLinkViper } from "../../utils/getEtherscanLink"
import { AutoColumn } from "../Column"
import { AutoRow } from "../Row"
import useBlockchain from "../../hooks/useBlockchain"
import getExplorerName from "../../utils/getExplorerName"

const RowNoFlex = styled(AutoRow)`
  flex-wrap: nowrap;
`

export default function TransactionPopup({
  hash,
  success,
  summary,
}: {
  hash: string
  success?: boolean
  summary?: string
}) {
  const { chainId } = useActiveWeb3React()
  // const theme = useContext(ThemeContext)
  const blockchain = useBlockchain()
  const explorerName = getExplorerName(blockchain)

  return (
    <RowNoFlex>
      <div style={{ paddingRight: 16 }}>
        {success ? (
          <CheckCircle color="#27AE60" size={24} />
        ) : (
          <AlertCircle color="#FD4040" size={24} />
        )}
      </div>
      <AutoColumn gap="8px">
        <TextWrapper fontWeight={500} fontSize={16} color={"text1"}>
          {summary ?? "Hash: " + hash.slice(0, 8) + "..." + hash.slice(58, 65)}
        </TextWrapper>
        {chainId && (
          <ExternalLink
            href={getEtherscanLinkViper(chainId, hash, "transaction")}
          >
            View on {explorerName}
          </ExternalLink>
        )}
      </AutoColumn>
    </RowNoFlex>
  )
}
