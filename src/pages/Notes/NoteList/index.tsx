import * as React from 'react'
import Grid from 'material-ui/Grid'
import Note from './NoteCard'
import { connect } from 'react-redux'

interface IStateProps {
  list: any[]
}

function NoteList({ list }: IStateProps) {
  return (
    <Grid container spacing={24}>
      {
        list.map((value) => (
          <Grid item xs={12}>
            <Note {...value} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default connect<IStateProps, null, null>(
  (state: any) => ({
    list: state.notes
  }),
  null
)(NoteList)
