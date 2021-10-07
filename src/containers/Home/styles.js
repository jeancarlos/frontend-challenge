import styled from 'styled-components'
import Fab from '@mui/material/Fab'

export const Main = styled.div`
  margin: 0 auto;
  padding: 1em;
  max-width: 819px;
`

export const FabStyled = styled(Fab)`
  && {
    background: #fff;
    border: ${({ color }) => color} 16px solid;
    height: 130px;
    width: 130px;
  }
`

export const GridButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 130px;
`

