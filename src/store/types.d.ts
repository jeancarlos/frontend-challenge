interface IPlayer {
  name: string
  score: number
}

type TPlayerState = {
  players: IPlayer[]
}

type TPlayerAction = {
  type: string
  player: IPlayer
}

type TDispatchType = (args: TPlayerAction) => TPlayerAction
