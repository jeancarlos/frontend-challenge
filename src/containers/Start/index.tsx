import React, { useCallback } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ScoreCard from '../../components/ScoreCard'
import Wrapper from '../../components/Wrapper'
import HandButton from '../../components/HandButton'
import { THands } from '../../commons/constants/types'
import { updatePlayer } from '../../store/actionCreators'
import { TPlayerState } from '../../store/types'
import { GridStyled } from './styles'

const Start: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const players = useSelector((state: TPlayerState) => state.players, shallowEqual)
  const score = players[0].score

  const handleClick = useCallback((hand: THands) => {
    dispatch(updatePlayer({ ...players[0], hand }))
    setTimeout(() => history.push('/results'), 100)
  }, [history])

  return (
    <Wrapper>
      <ScoreCard score={score} />
      <GridStyled container justifyContent="space-around">
        <HandButton hand="rock" onClick={handleClick} />
        <HandButton hand="paper" onClick={handleClick} />
        <HandButton hand="scissor" onClick={handleClick} />
      </GridStyled>
    </Wrapper>
  )
}

export default Start
