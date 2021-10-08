import React, { ReactNode } from 'react'
import { ReactComponent as IconRock } from '../../assets/icon-rock.svg'
import { ReactComponent as IconPaper } from '../../assets/icon-paper.svg'
import { ReactComponent as IconScissors } from '../../assets/icon-scissors.svg'
import { THands } from '../../commons/constants/types'
import { hands } from '../../commons/constants'
import { FabStyled, WrapperButton } from './styles'
import { THandButton } from './types'


const icon = (hand: THands): ReactNode => {
  if (hand === hands.scissor) return <IconScissors />
  if (hand === hands.paper) return <IconPaper />
  if (hand === hands.rock) return <IconRock />
  return ''
}

const GridButton: React.FC<THandButton> = ({ hand, onClick, disabled }) => {
  const handleClick = (): void => {
    if (onClick) onClick(hand)
  }
  return (
    <WrapperButton>
      <FabStyled
        hand={hand}
        disableRipple={disabled}
        disableFocusRipple={disabled}
        onClick={handleClick}
      >{icon(hand)}</FabStyled>
    </WrapperButton>
  )
}

export default GridButton
