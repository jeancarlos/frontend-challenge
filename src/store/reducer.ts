import * as actionTypes from "./actionTypes"

const initialState: TPlayerState = {
  players: [
    {
      name: "JCS",
      score: 0,
    },
    {
      name: "TMK",
      score: 0,
    }
  ],
}

const reducer = (state: TPlayerState = initialState, action: TPlayerAction): TPlayerState => {
  const { type } = action
  if (actionTypes.ADD_SCORE === type) {
    const players = state.players
    const isNewPlayer = players.some((player: IPlayer) => action.player.name === player.name)

    if (isNewPlayer) {
      players.push(action.player)
      return { ...state, players }
    }

    return {
      ...state,
      players: players.map(({ name, score }: IPlayer) => {
        if (name === action.player.name) return { name, score: score + 1 }
        return { name, score }
      })
    }
  }

  return state
}

export default reducer
