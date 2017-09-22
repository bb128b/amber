import * as React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import NoteList from './NoteList'
import AddNote from './AddNote'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import { show } from './AddNote/actions'

interface IDispatchProps {
  onAddClick: () => void
}

type IProps = IDispatchProps

function NotesPage(props: IProps) {
  const { classes, onAddClick } = props as any

  return (
    <div className={classes.root}>
      <NoteList />
      <Button
        className={classes.addButton}
        onClick={onAddClick}
        aria-label='add'
        color='primary'
        fab
      >
        <AddIcon />
      </Button>
      <AddNote />
    </div>
  )
}

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

const StyledComponent = withStyles(styles)(NotesPage as any)

export default connect<null, IDispatchProps, null>(
  null,
  (dispatch: any) => ({
    onAddClick: () => { dispatch(show()) },
  })
)(StyledComponent)
