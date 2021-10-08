import React from 'react'
import { Card } from '@mui/material'
import { TScore } from './types'
import { ScoreText, ScoreNumText } from './styles'

const ScoreCard: React.FC<TScore> = ({ score }) => {
  return (
    <Card>
      <ScoreText align="center">SCORE</ScoreText>
      <ScoreNumText align="center">{score}</ScoreNumText>
    </Card>
  )
}

export default ScoreCard
