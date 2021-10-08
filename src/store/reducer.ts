import * as actionTypes from "./actionTypes"
import { IPlayer, TPlayerState, TPlayerAction } from './types'
import { hands } from '../commons/constants'

const initialState: TPlayerState = {
  players: [
    {
      name: 'Player 1',
      score: 0,
      hand: hands.paper
    }
  ],
}

const reducer = (state: TPlayerState = initialState, action: TPlayerAction): TPlayerState => {
  const { type } = action
  if (actionTypes.ADD_SCORE === type) {
    const players = state.players
    const isNewPlayer = !players.some((player: IPlayer) => action.player.name === player.name)

    if (isNewPlayer) {
      players.push(action.player)
      return { ...state, players }
    }

    return {
      ...state,
      players: players.map(({ name, score, hand }: IPlayer) => {
        if (name === action.player.name) return { name, hand, score: score + 1 }
        return { name, score, hand }
      })
    }
  }

  if (actionTypes.UPATE_PLAYER === type) {
    return {
      ...state,
      players: state.players.map((player: IPlayer) => {
        if (player.name === action.player.name) return { ...player, ...action.player }
        return player
      })
    }
  }

  return state
}

export default reducer
