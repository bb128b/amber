import * as React from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import AppBar from 'App/core/AppBar'
import Notes from 'App/Notes'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { connect } from 'react-redux'
import { getTheme } from 'data/theme/actions'

const styles = ({ spacing }) => ({
  app: {
    flexGrow: 1,
    padding: spacing.unit * 2,
    marginTop: 56
  }
})

interface IProps {
  theme: ThemeOptions
}

// add to theme background: #f2f6ff;
function App({ theme }: IProps) {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className='App'>
        <AppBar />
        <Notes />
      </div>
    </MuiThemeProvider>
  )
}

export default connect(
  (state: any) => ({
    theme: getTheme(state)
  })
)(App)
