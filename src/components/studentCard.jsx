import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { connect } from "react-redux";
import {deleteStudent} from '../actions/actions';


// import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: 370,
    justifyContent: 'space-between',
    height: 151,
    margin: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    padding: '10px 15px',
    '&:last-child': {
      paddingBottom: 0
    }
  },

  cover: {
    width: 151,
    height: '100%'
  }
}));

function StudentCard(props) {
  const classes = useStyles();
  const { name, picture, email, enrollmentNumber } = props.student;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {email}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {enrollmentNumber}
          </Typography>

          <IconButton>
            <input type="checkbox" name="present"/><label style={{fontSize:12, fontWeight:700}}>Present</label>
          </IconButton>
          <IconButton onClick={() => props.deleteStudent(enrollmentNumber)}>
            <DeleteIcon className={classes.icon} />
          </IconButton>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={picture}
        title="Live from space album cover"
      />
    </Card>
  );
}
const mapDispatchToProps = dispatch => ({
  deleteStudent: payload => {
      dispatch(deleteStudent(payload))
  }
})
export default connect(null, mapDispatchToProps)(StudentCard)