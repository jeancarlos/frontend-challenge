import { THands } from '../commons/constants/types'

export interface IPlayer {
  name: string
  score: number
  hand: THands
}

export type TPlayerState = {
  players: IPlayer[]
}

export type TPlayerAction = {
  type: string
  player: IPlayer
}

export type TDispatchType = (args: TPlayerAction) => TPlayerAction
