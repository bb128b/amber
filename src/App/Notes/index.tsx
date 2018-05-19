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
    marginTop: 56,
    background: 'pink'
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
}

function NotesPage(props: IProps) {
  console.log('rendering', 'NotesPage')
  const { classes, handleCreateNote } = props

  return (
    <div className={classes.root}>
      <NoteList />
      <CreateNote />
      <Button
        className={classes.addButton}
        onClick={handleCreateNote}
        aria-label='Create note'
        color='secondary'
        variant='fab'
      >
        <Icon>add</Icon>
      </Button>
    </div>
  )
}

const StyledComponent = withStyles(styles)(NotesPage)

export default connect(undefined,
  (dispatch: any) => ({
    handleCreateNote: () => { dispatch(show()) },
  })
)(StyledComponent)
