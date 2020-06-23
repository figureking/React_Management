import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Customer from './Components/Customer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles= theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

const customers =[
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '홍길동',
    'birthday' : ' 20200622',
    'gender' : '남',
    'job' : '영업부'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : ' 20200622',
    'gender' : '남',
    'job' : '생산부'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name' : '홍길동',
      'birthday' : ' 20200622',
      'gender' : '남',
      'job' : '기술부'
      }
]

class App extends Component {
  render() {
    const { classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className = {classes.Table}>
        <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            { 
              customers.map(c => {
                return(
                  <Customer
                    key={c.id} /* map key값 에러*/
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
      
    );
  }
}

export default withStyles(styles)(App);
