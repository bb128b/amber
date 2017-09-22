import * as React from 'react'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import TextField from 'material-ui/TextField'
import { hide, extractState } from './actions'
import { IState } from './reducer'

type ClassNames = {
  appBar: string
  flex: string
}

type IDispatchProps = {
  onCloseClick: () => void
}

type IProps = IDispatchProps & IState & { classes: ClassNames }

function AddNoteDialog({ classes, isOpen, onCloseClick }: IProps) {

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        // onRequestClose={this.handleRequestClose}
        transition={<Slide direction='up' />}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='contrast'
              onClick={onCloseClick}
              aria-label='Close'
            >
              <CloseIcon />
            </IconButton>
            <Typography
              type='title'
              color='inherit'
              className={classes.flex}
            >
              {'Add a note'}
            </Typography>
            <Button
              color='contrast'
            // onClick={this.handleRequestClose}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <TextField
          id='multiline-flexible'
          label='Multiline'
          multiline
          rowsMax='4'
          value='a'
          // onChange={this.handleChangeMultiline}
          // className={classes.textField}
          margin='normal'
        />
        <List>
          <ListItem button>
            <ListItemText primary='Phone ringtone' secondary='Titania' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Default notification ringtone' secondary='Tethys' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  }
}

const StyledComponent = withStyles(styles as any)(AddNoteDialog)

export default connect<IState, IDispatchProps, null>(
  (state: any) => extractState(state),
  (dispatch: any) => ({
    onCloseClick: () => { dispatch(hide()) },
  })
)(StyledComponent)
