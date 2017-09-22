import * as React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Note from './NoteCard/index'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { connect } from 'react-redux'

interface IStateProps {
  list: any[]
}

function Dashboard(props: any) {
  const { classes, list } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {
          list.map((value) => (
            <Grid item xs={12}>
              <Note {...value} />
            </Grid>
          ))
        }
        {
          list.map((value) => (
            <Grid item xs={12}>
              <Note {...value} />
            </Grid>
          ))
        }
        {
          list.map((value) => (
            <Grid item xs={12}>
              <Note {...value} />
            </Grid>
          ))
        }
        {
          list.map((value) => (
            <Grid item xs={12}>
              <Note {...value} />
            </Grid>
          ))
        }
      </Grid>
      <Button
        fab
        color="primary"
        aria-label="add"
        className={classes.fab}
      >
        <AddIcon />
      </Button>
    </div>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    marginTop: 56
  },
  fab: {
    position: 'fixed' as 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
})
// IOwnProps, StyleRules
const StyledComponent = withStyles(styles)(Dashboard)

export default connect<IStateProps, null, null>(
  (state: any) => ({
    list: state.notes
  }),
  null
)(StyledComponent)
