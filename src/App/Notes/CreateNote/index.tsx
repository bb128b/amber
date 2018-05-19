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
import Drawer from '@material-ui/core/Drawer';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

import withMobileDialog from '@material-ui/core/withMobileDialog';
import { Field, reduxForm, reset, InjectedFormProps } from 'redux-form'
import { hide, extractState } from './actions'
import { createNote } from 'data/notes/actions'

interface CreateNoteProps extends InjectedFormProps {
  classes: {
    titleInput: string
    descriptionInput: string
  }
  fullScreen: boolean
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

let CreateNote: any = ({ classes, fullScreen, isOpen, handleClose, handleSubmit }: CreateNoteProps) => {
  console.log('rendering', 'CreateNote')

  return (
    <Drawer anchor="left" open={isOpen} onClose={handleClose}>
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
      <Button onClick={handleSubmit} color='primary'>Save</Button>
    </Drawer>
    // <Dialog
    //   // TransitionComponent={(props) => <Slide direction='left' {...props} />}
    //   onClose={handleClose}
    //   open={isOpen}
    //   fullScreen={fullScreen}
    // >
    //   <Toolbar>
    //     <IconButton onClick={handleClose} aria-label='Close' color='default'>
    //       <Icon>close</Icon>
    //     </IconButton>
    //   </Toolbar>
    //   <DialogContent>
    //     <Field
    //       className={classes.titleInput}
    //       name='title'
    //       type='text'
    //       component={({ input }: any) => (
    //         <Input
    //           placeholder='Title'
    //           aria-label='Title'
    //           disableUnderline
    //           fullWidth
    //           {...input}
    //         />
    //       )}
    //     />
    //     <Divider />
    //     <Field
    //       className={classes.descriptionInput}
    //       name='description'
    //       type='text'
    //       component={({ input }: any) => (
    //         <Input
    //           placeholder='What would you like to add?'
    //           aria-label='Description'
    //           disableUnderline
    //           fullWidth
    //           multiline
    //           autoFocus
    //           {...input}
    //         />
    //       )}
    //     />
    //   </DialogContent>
    //   <DialogActions>
    //   </DialogActions>
    // </Dialog>
  )
}

CreateNote = withMobileDialog()(CreateNote)

const styles = ({ typography }) => ({
  titleInput: typography.title,
  descriptionInput: typography.subheading,
})

CreateNote = withStyles(styles)(CreateNote)
CreateNote = reduxForm({ form: 'create-note' })(CreateNote)

const mapState = (state) => extractState(state)
const mapDispatch = (dispatch) => ({
  handleClose: () => {
    console.log('handleClose')
    dispatch(hide())
  },
  onSubmit: (values) => {
    console.log('onSubmit', values)

    try {
      dispatch(createNote(values))
      dispatch(reset('create-note'));
    } catch (error) {
      console.log('err', error)
    } finally {
      dispatch(hide())
    }
  }
})

CreateNote = connect(mapState, mapDispatch)(CreateNote)
export default CreateNote 