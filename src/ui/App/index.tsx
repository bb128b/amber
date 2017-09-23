import * as React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { connect } from 'react-redux'
import { getTheme } from 'ui/theme/actions'

import AppBar from 'ui/shared/AppBar'
import Notes from 'ui/Notes'

// add to theme background: #f2f6ff;
function App({ theme }: any) {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className='App'>
        <AppBar />
        <Notes />
      </div>
    </MuiThemeProvider>
  )
}

export default connect<any, null, null>(
  (state: any) => ({
    theme: getTheme(state)
  }),
  null
)(App)
