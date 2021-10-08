import { hands } from './constant'

export type THands = keyof typeof hands;

export type TFabStyled = {
  hand: THands
}
