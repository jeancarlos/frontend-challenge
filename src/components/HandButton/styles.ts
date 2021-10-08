import { Fab } from '@mui/material'
import styled from 'styled-components'
import { TFabStyled } from './types'
import { handsColor } from '../../commons/constants'

export const FabStyled = styled(Fab)<TFabStyled>`
&& {
  background: #fff;
  border: ${({ hand }) => handsColor[hand] } 16px solid;
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

export const WrapperButton = styled.div`
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
