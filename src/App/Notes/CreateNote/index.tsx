import * as React from 'react'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import Input from 'material-ui/Input'
import { hide, extractState } from './actions'
// import { IState } from './reducer'
import Grid from 'material-ui/Grid'
import Dialog, { DialogActions, DialogContent, DialogTitle, DialogContentText } from 'material-ui/Dialog'

import { createNote } from 'data/notes/actions'

import Button from 'material-ui/Button'

import { Field, reduxForm, InjectedFormProps } from 'redux-form'

const styles = ({ typography }) => ({
  titleInput: typography.title,
  descriptionInput: typography.subheading,
})

interface IProps extends InjectedFormProps {
  classes: {
    titleInput: string
    descriptionInput: string
  }
  isOpen: boolean
  handleClose: () => void
}

class CreateNote extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { handleSubmit, classes, isOpen, handleClose } = this.props
    return (
      <Dialog
        transition={<Slide direction='up' />}
        onRequestClose={handleClose}
        open={isOpen}
        fullScreen
      >
        <Toolbar>
          <IconButton
            onClick={handleClose}
            aria-label='Close'
            color='default'
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <DialogContent>
          <Field
            className={classes.titleInput}
            name='title'
            type='text'
            component={({ input }: any) => (
              <Input
                placeholder='Title'
                aria-label='Title'
                disableUnderline
                fullWidth
                {...input}
              />
            )}
          />
          <Divider />
          <Field
            className={classes.descriptionInput}
            name='description'
            type='text'
            component={({ input }: any) => (
              <Input
                placeholder='What would you like to add?'
                aria-label='Description'
                disableUnderline
                fullWidth
                multiline
                autoFocus
                {...input}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color='primary'>Save</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const FormComponent = reduxForm({
  form: 'create-note'
})(CreateNote)

const StyledComponent = withStyles(styles)(FormComponent as any)

export default connect(
  (state: any) => extractState(state),
  (dispatch: any) => ({
    handleClose: () => { dispatch(hide()) },
    onSubmit: (values) => {
      try {
        dispatch(createNote(values))
      } finally {
        dispatch(hide())
      }
      // } catch (error) {
      //   console.log('err', error)
      // }
    }
  })
)(StyledComponent)
