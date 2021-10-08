import styled from 'styled-components'
import { Typography, Grid, Fab } from '@mui/material'
import { TFabStyled } from './types'
import { hands } from './constant'

export const Main = styled.div`
  margin: 0 auto;
  padding: 54px 30px;
  max-width: 819px;

  @media (min-width: 576px) {

  }
`

export const FabStyled = styled(Fab)<TFabStyled>`
  && {
    background: #fff;
    border: ${({ hand }) => hands[hand] } 16px solid;
    height: 110px;
    width: 110px;

    @media (min-width: 366px) {
      height: 130px;
      width: 130px;
    }

    @media (min-width: 768px) {
      height: 200px;
      width: 200px;

      svg {
        transform: scale(1.3);
      }
    }
  }
`

export const GridStyled = styled(Grid)`
  && {
    margin-top: 76px;
  }
`

export const GridButton = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 1 0 50%;
  flex-wrap: wrap;
  height: 130px;
  justify-content: center;
  width: 50%;

  @media (min-width: 768px) {
    height: 170px;
  }
`

export const ScoreText = styled(Typography)`
  && {
    color: #34495E;
    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
    padding-top: 10px;
  }
`

export const ScoreNumText = styled(Typography)`
  && {
    color: #34495E;
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
    padding-bottom: 10px;
  }
`
