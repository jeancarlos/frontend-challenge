import * as actionTypes from "./actionTypes"

export const addScore = (player: IPlayer): unknown => {
  const action: TPlayerAction = {
    type: actionTypes.ADD_SCORE,
    player,
  }

  return simulateHttpRequest(action)
}

export const simulateHttpRequest = (action: TPlayerAction): unknown => {
  return (dispatch: TDispatchType): void => { setTimeout(() => dispatch(action), 500) }
}
