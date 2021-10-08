import * as actionTypes from "./actionTypes"
import { IPlayer, TPlayerAction, TDispatchType } from './types'

export const addScore = (player: IPlayer): unknown => {
  const action: TPlayerAction = {
    type: actionTypes.ADD_SCORE,
    player,
  }

  return simulateRequest(action)
}

export const updatePlayer = (player: IPlayer): unknown => {
  const action: TPlayerAction = {
    type: actionTypes.UPATE_PLAYER,
    player,
  }

  return (dispatch: TDispatchType): void => { dispatch(action) }
}

export const simulateRequest = (action: TPlayerAction): unknown => {
  return (dispatch: TDispatchType): void => { setTimeout(() => dispatch(action), 500) }
}
