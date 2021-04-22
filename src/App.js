import { Container, Grid } from '@material-ui/core'

import './index.css'
import React from 'react'
import Main from './main'
import Footer from './components/footer'


const App = () => {
  return (
    <Grid style={ { minWidth: '100%' } } container width={1} alignItems='center' justify='center' direction='column'>
      <Container style={ { minWidth: '100%' } }>
        <Main />
      </Container>
      <Container className='Footer' style={ { minWidth: '100%' } } >
        <Footer />
      </Container>
    </Grid>
  )
}


export default App
