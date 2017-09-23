import * as React from 'react'
import Grid from 'material-ui/Grid'
import NoteCard from '../NoteCard'
import { connect } from 'react-redux'
import { getNotes } from 'data/notes/actions'

interface IStateProps {
  list: any[]
}

function NoteList({ list }: IStateProps) {
  return (
    <Grid container spacing={16}>
      {
        list.map((value) => (
          <Grid item xs={12}>
            <NoteCard {...value} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default connect<IStateProps, null, null>(
  (state: any) => ({
    list: getNotes(state)
  }),
  null
)(NoteList)
