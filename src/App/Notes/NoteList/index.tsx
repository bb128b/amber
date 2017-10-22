import * as React from 'react'
import Grid from 'material-ui/Grid'
import { connect } from 'react-redux'
import { getNotes, INote } from 'data/notes/actions'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

interface IProps {
  classes: {
    card: string
  }
  notes: INote[]
}

const styles = theme => ({
  card: {
    minWidth: 275,
  },
})

function NoteList({ classes, notes }: IProps) {
  return (
    <Grid container spacing={16}>
      {
        notes.sort((a, b) => b.createdAt - a.createdAt).map((note: INote) => (
          <Grid item xs={12} key={note.createdAt}>
            <Card className={classes.card} elevation={0}>
              <CardContent>
                <Typography type='title' gutterBottom>
                  {note.title}
                </Typography>
                <Typography type='subheading'>{note.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

const StyledComponent = withStyles(styles)(NoteList as any)

export default connect(
  (state: any) => ({
    notes: getNotes(state)
  })
)(StyledComponent)
