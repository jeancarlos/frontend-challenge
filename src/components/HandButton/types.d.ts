import { THandsColor, THands } from '../../commons/constants/types'

export type TFabStyled = {
  hand: THandsColor
}

export type THandButton = {
  hand: THands
  disabled?: boolean,
  onClick?(): void
}
