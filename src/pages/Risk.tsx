import "./Risk.scss"

import { Container, Typography } from "@mui/material"
import React, { ReactElement } from "react"

import { useTranslation } from "react-i18next"

function Risk(): ReactElement {
  const { t } = useTranslation()

  return (
    <div className="riskpage">
      <Container maxWidth="md" sx={{ mb: 16 }}>
        <Typography variant="h3" mt={5} mb={2}>
          Risk
        </Typography>
        <Typography variant="body1" data-testid="risk-intro">
          {t("riskIntro")}{" "}
          <a href="https://github.com/saddle-finance/saddle-contract">
            {t("riskIntro2")}
          </a>{" "}
          {t("riskIntro3")}
        </Typography>
        <Typography variant="h3" mt={5} mb={2}>
          {t("audits")}
        </Typography>
        <Typography variant="body1" data-testid="risk-audits">
          {t("riskAudits")}{" "}
          <a href="https://github.com/saddle-finance/saddle-audits">
            {t("riskAudits2")}
          </a>
          {"."}
          <br />
          <br />
          {t("riskAudits3")}
          <br />
          <br />
          {t("riskAudits4")}
        </Typography>
        <Typography variant="h3" mt={5} mb={2}>
          {t("lossOfPeg")}
        </Typography>
        <Typography variant="body1" data-testid="risk-lossofpeg">
          {t("riskLossOfPeg")}
        </Typography>
      </Container>
    </div>
  )
}

export default Risk
