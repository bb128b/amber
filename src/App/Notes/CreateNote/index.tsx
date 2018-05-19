import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide'
import Input from '@material-ui/core/Input'
import { hide, extractState } from './actions'
// import { IState } from './reducer'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { createNote } from 'data/notes/actions'

import Button from '@material-ui/core/Button'

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
  handleSubmit: () => void
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
        TransitionComponent={(props) => <Slide direction='up' {...props} />}
        onClose={handleClose}
        open={isOpen}
        fullScreen
      >
        <Toolbar>
          <IconButton
            onClick={handleClose}
            aria-label='Close'
            color='default'
          >
            <Icon>close</Icon>
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
