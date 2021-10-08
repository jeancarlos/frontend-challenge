import React, { useState, useCallback } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ReactComponent as IconRock } from '../../assets/icon-rock.svg'
import { ReactComponent as IconPaper } from '../../assets/icon-paper.svg'
import { ReactComponent as IconScissors } from '../../assets/icon-scissors.svg'
import { Main, FabStyled, GridButton } from './styles'

const Home: React.FC = () => {
  const [score, setScore] = useState(0)

  const handleClick = useCallback(() => setScore(score + 1), [score])

  return (
    <Main>
      <Card>
        <Typography className="center-text">Score</Typography>
        <Typography className="center-text">{score}</Typography>
      </Card>
      <Grid container justifyContent="space-around">
        <GridButton>
          <FabStyled hand="rock" onClick={handleClick}><IconRock /></FabStyled>
        </GridButton>
        <GridButton>
          <FabStyled hand="paper" onClick={handleClick}><IconPaper /></FabStyled>
        </GridButton>
        <GridButton>
          <FabStyled hand="scissor" onClick={handleClick}><IconScissors /></FabStyled>
        </GridButton>
      </Grid>
    </Main >
  )
}

export default Home
