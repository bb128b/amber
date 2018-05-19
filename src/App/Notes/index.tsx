import * as React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import NoteList from './NoteList'
import CreateNote from './CreateNote'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button'
import { show } from './CreateNote/actions'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    marginTop: 56
  },
  addButton: {
    position: 'fixed' as 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
})

interface IProps {
  classes: {
    root: string
    addButton: string
  }
  handleCreateNote: () => void
  isCreateNoteOpen: boolean
}

function NotesPage(props: IProps) {
  const { classes, handleCreateNote, isCreateNoteOpen } = props

  return (
    <div className={classes.root}>
      <NoteList />
      <Button
        className={classes.addButton}
        onClick={handleCreateNote}
        aria-label='Create note'
        color='secondary'
        variant='fab'
      >
        <Icon>add</Icon>
      </Button>
      {
        isCreateNoteOpen ? <CreateNote /> : null
      }
    </div>
  )
}

const StyledComponent = withStyles(styles)(NotesPage as any)

export default connect(
  (state: any) => ({
    isCreateNoteOpen: state.app.notes.createNote.isOpen,
  }),
  (dispatch: any) => ({
    handleCreateNote: () => { dispatch(show()) },
  })
)(StyledComponent)
