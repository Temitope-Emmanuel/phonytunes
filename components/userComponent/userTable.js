import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button,Box} from "@material-ui/core"
import {blue} from '@material-ui/core/colors'
import Dialog from './DialogComponent'

const useStyles = makeStyles({
  root:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"end",
    "& > button":{
      margin:'1em 0',
      padding:".8em 1em"
    },
    padding:"0 1em"
  },
  table: {
    minWidth: 650,
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const SimpleTable = function() {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Box className={classes.root}>
      <h3>Most Recent transaction</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Comment</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={handleToggle} style={{
      backgroundColor:blue[300],
      color:blue[900]
    }}>Create New Transaction</Button>
    <Dialog open={open} handleToggle={handleToggle} />
    </Box>
  );
}


export default SimpleTable