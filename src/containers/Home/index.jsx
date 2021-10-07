import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ReactComponent as IconRock } from '../../assets/icon-rock.svg'
import { ReactComponent as IconPaper } from '../../assets/icon-paper.svg'
import { ReactComponent as IconScissors } from '../../assets/icon-scissors.svg'
import { Main, FabStyled, GridButton } from './styles'

function Home () {
  const [score, setScore] = useState(0)
  return (
    <Main>
      <Card>
        <Typography className="center-text">Score</Typography>
        <Typography className="center-text">{score}</Typography>
      </Card>
      <Grid container justifyContent="space-around">
        <GridButton>
          <FabStyled color="#27AE60"><IconRock /></FabStyled>
        </GridButton>
        <GridButton>
          <FabStyled color="#F1C40F"><IconPaper /></FabStyled>
        </GridButton>
        <GridButton>
          <FabStyled color="#2980B9"><IconScissors /></FabStyled>
        </GridButton>
      </Grid>
    </Main >
  )
}

export default Home;
