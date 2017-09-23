import * as React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  card: {
    minWidth: 275,
    // borderRadius: theme.spacing.unit / 2
  },
  title: {
    // fontSize: 14,
    // color: theme.palette.text.secondary,
  },
  text: {
    // color: theme.palette.text.secondary,
  },
})

// type TOwnProps = {
//   title?: string
//   text?: string
// }

function SimpleCard({ classes, title, text }: any) {
  return (
    <div>
      <Card
        className={classes.card}
        elevation={0}
      >
        <CardContent>
          <Typography type='headline' gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.text}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(SimpleCard)
