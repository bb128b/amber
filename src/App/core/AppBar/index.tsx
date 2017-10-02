import * as React from 'react'
import { withStyles } from 'material-ui/styles'
import MuiAppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  root: {
    position: 'relative' as 'relative',
    // marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

// interface StyledComponentClassNames {
//   root: string;
//   flex: string;
//   menuButton: string;
// }

interface IOwnProps {
  onMenuClick?: () => void
}

function AppBar(props: any) {
  // console.log(props);
  const classes = props.classes
  return (
    <div className={classes.root}>
      <MuiAppBar position='fixed'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='contrast' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography type='title' color='inherit' className={classes.flex}>
            Amber
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

export default withStyles(styles)<IOwnProps>(AppBar)
