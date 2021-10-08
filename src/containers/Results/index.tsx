import React, { useEffect, useState, useCallback, ReactNode } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Grid } from '@mui/material'
import ScoreCard from '../../components/ScoreCard'
import Wrapper from '../../components/Wrapper'
import HandButton from '../../components/HandButton'
import { hands } from '../../commons/constants'
import { addScore } from '../../store/actionCreators'
import { IPlayer, TPlayerState } from '../../store/types'
import { GridStyled, ProcessText, ButtonStyled } from './styles'
import { gameLogic } from './helpers'

const Results: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const players = useSelector((state: TPlayerState) => state.players, shallowEqual)
  const selectedHand = players[0].hand
  const score = players[0].score
  const [computerHand, setComputerHand] = useState(hands.none)
  const [gameWin, setGameWin] = useState(false)
  const delay = Math.floor(Math.random() * 1000)

  const goToStart = () => history.push('/')

  const updatePlayer = useCallback((player: IPlayer) => dispatch(addScore(player)), [dispatch])

  useEffect(() => {
    setTimeout(() => {
      const handPosition = Math.floor(Math.random() * 3)
      const computerSelectedHand = Object.values(hands)[handPosition]

      setComputerHand(computerSelectedHand)
      setGameWin(gameLogic(selectedHand, computerSelectedHand))
    }, delay)
  }, [])

  useEffect(() => {
    if (gameWin) updatePlayer(players[0])
  }, [gameWin])

  const renderProcessText = (): ReactNode => {
    if (computerHand === hands.none) return <ProcessText>MACHINE IS<br />CHOOSING...</ProcessText>
    return <ProcessText>MACHINE SELECTED<br />{computerHand}</ProcessText>
  }

  const renderResultText = (): ReactNode => {
    if (computerHand === hands.none) return ''
    if (computerHand === selectedHand) return 'IT\'S A TIE'
    if (gameWin) return 'YOU WIN'
    return 'YOU LOOSE'
  }

  const renderResultButton = (): ReactNode | null => {
    if (computerHand === hands.none) return null
    return <ButtonStyled color="primary" variant="contained" onClick={goToStart}>Play Again</ButtonStyled>
  }

  return (
    <Wrapper>
      <ScoreCard score={score} />
      <GridStyled container justifyContent="space-around">
        <HandButton hand={selectedHand} disabled />
        <HandButton hand={computerHand} disabled />
      </GridStyled>
      {renderProcessText()}
      <ProcessText>{renderResultText()}</ProcessText>
      <Grid container justifyContent="center">
        {renderResultButton()}
      </Grid>
    </Wrapper>
  )
}

export default Results
