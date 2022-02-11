/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from "@mui/material"
import palette from "./palette"
import typography from "./typography"
import { Colors } from "./styled"

import { Text } from "rebass"
import styled from "styled-components"

export const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const lightTheme = createTheme({
  palette: palette.lightPalette,
  typography: typography,
  spacing: 8,
})

export const darkTheme = createTheme({
  palette: palette.darkPalette,
  typography: typography,
  spacing: 8,
})

const white = "#FFFFFF"
const black = "#000000"

export function harmonyColors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? "#FFFFFF" : "#000000",
    text2: darkMode ? "#C3C5CB" : "#565A69",
    text3: darkMode ? "#6C7284" : "#888D9B",
    text4: darkMode ? "#565A69" : "#C3C5CB",
    text5: darkMode ? "#2C2F36" : "#EDEEF2",

    // backgrounds / greys
    bg1: darkMode ? "#212429" : "#FFFFFF",
    bg2: darkMode ? "#2C2F36" : "#F7F8FA",
    bg3: darkMode ? "#40444F" : "#EDEEF2",
    bg4: darkMode ? "#565A69" : "#CED0D9",
    bg5: darkMode ? "#6C7284" : "#888D9B",

    //specialty colors
    modalBG: darkMode ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
    advancedBG: darkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",

    //primary colors
    primary1: darkMode ? "#2172E5" : "#00AEE9",
    primary2: darkMode ? "#3680E7" : "#69FABD",
    primary3: darkMode ? "#4D8FEA" : "#00c5eb",
    primary4: darkMode ? "#376bad70" : "#bcecfd",
    primary5: darkMode ? "#153d6f70" : "#d9f4fd",

    // color text
    primaryText1: darkMode ? "#6da8ff" : "#00AEE9",

    // secondary colors
    secondary1: darkMode ? "#2172E5" : "#00AEE9",
    secondary2: darkMode ? "#17000b26" : "#F6DDE8",
    secondary3: darkMode ? "#17000b26" : "#FDEAF1",

    // other
    red1: "#FD4040",
    red2: "#F82D3A",
    red3: "#D60000",
    green1: "#27AE60",
    yellow1: "#FFE270",
    yellow2: "#F3841E",
    blue1: "#2172E5",

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

    // Added:
    tokenButtonGradientStart: "#008c6b",
    tokenButtonGradientEnd: "#005224",
    customCardGradientStart: "#008c6b",
    customCardGradientEnd: "#00c09c",
  }
}

// export const TYPE = {
//   body(props: TextProps) {
//     return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
//   }
// }
