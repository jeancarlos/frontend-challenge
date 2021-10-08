import React, { useEffect, useState, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from '@mui/material'
import ScoreCard from '../../components/ScoreCard'
import Wrapper from '../../components/Wrapper'
import HandButton from '../../components/HandButton'
import { hands } from '../../commons/constants/index'
import { GridStyled, ProcessText, ButtonStyled } from './styles'
import { gameLogic } from './helpers'


const Results: React.FC = () => {
  const history = useHistory()
  const selectedHand = hands.rock
  const score = 0
  const [computerHand, setComputerHand] = useState(hands.none)
  const [gameWin, setGameWin] = useState(false)
  const delay = Math.floor(Math.random() * 1000)

  const goToStart = () => history.push('/')

  /* useEffect(() => {
    if (selectedHand === hands.none) goToStart()
  }, [selectedHand]) */

  useEffect(() => {
    setTimeout(() => {
      const handPosition = Math.floor(Math.random() * 3)
      const computerSelectedHand = Object.values(hands)[handPosition]

      setComputerHand(computerSelectedHand)
      setGameWin(gameLogic(selectedHand, computerSelectedHand))
    }, delay)
  }, [])


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
