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
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomerAdd from './Components/CustomerAdd';


const styles= theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  },
  progress : { 
    margin: theme.spacing.unit * 2
  }
})


class App extends Component {

/*  state = {
    customers: "",
    completed:0 /* progress 초기값
  } 
*/

constructor(props) {
    super(props);
    this.state = {  
      customers: '',  
      completed: 0  
    }  
    this.stateRefresh = this.stateRefresh.bind(this);  
  }
  
  stateRefresh() {  
    this.setState({ 
      customers: '', 
      completed: 0 
    }); 
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20); /* progress 0.02초마다 */
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err)); 
  }

  callApi = async () => {
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes} = this.props;
    return (
      <div>
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
              { /*customers ? 값이 존재하는경우 */
                this.state.customers ? 
                this.state.customers.map(c => {
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
                }) : 
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }


            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}



export default withStyles(styles)(App);
