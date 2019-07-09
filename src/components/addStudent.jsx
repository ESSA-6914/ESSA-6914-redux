import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: 370,
    justifyContent: 'center',
    alignItems: 'center',
    height: 151,
    margin: 10
  }
}));

export default function AddStudent(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <IconButton className="add-button" onClick={props.addOne}>
        <h2 className="add-plus">+</h2>
      </IconButton>
    </Card>
  );
}
