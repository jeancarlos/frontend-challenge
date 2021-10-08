import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import ScoreCard from '../../components/ScoreCard'
import Wrapper from '../../components/Wrapper'
import HandButton from '../../components/HandButton'
import { GridStyled } from './styles'
const Start: React.FC = () => {
  const history = useHistory()
  const [score, setScore] = useState(0)

  const handleClick = () => history.push('/results')

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
