import * as React from 'react'
import Notes from 'pages/Notes'
import AppBar from 'components/AppBar'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
    // type: 'dark', // Switching the dark mode on is a single property value change.
  },
})

// console.log('Theme', theme);

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar />
          <Notes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
