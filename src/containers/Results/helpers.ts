import { hands } from "../../commons/constants"
import { THands } from "../../commons/constants/types"

export const gameLogic = (player: THands, computer: THands): boolean => {
  if (player === hands.rock) return computer === hands.scissor
  if (player === hands.paper) return computer === hands.rock
  if (player === hands.scissor) return computer === hands.paper
  return false
}
