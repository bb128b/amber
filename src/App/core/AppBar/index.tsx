import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';

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
          <IconButton>
            <Icon>menu</Icon>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography color='inherit' className={classes.flex}>
            Amber
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

export default withStyles(styles)<IOwnProps>(AppBar)
