import React, { Component } from 'react';
import './App.css';
import Calender from './Components/Calender';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list : ["swimming", "hiking", "biking"],
      selection: ""
    }
  }
  render() {
   let list = this.state.list.map((item,i) => (
      <div key={i} onClick= {(e) => {this.setState({selection : e.target.innerHTML})}}>{item}</div>
    ))

    const data = [{
      tasks: <Calender task={this.state.selection}/>,
      time: {
        1: "1AM",2: "2AM",3: "3AM",4: "4AM",5: "5AM",6: "6AM",7: "7AM",8: "8AM",9: "9AM",10: "10AM",11: "11AM",12: "12PM",13: "1PM",14: "2PM",15: "3PM",16: "4PM",17: "5PM",18: "6PM",19: "7PM",20: "8PM",21: "9PM",22: "10PM",23: "11PM",24: "12PM"}
      }]
  
    const columns = [
    {
      Header: 'Times',
      accessor: 'tasks'
    },
    {
      Header: 'Monday',
      accessor: 'tasks'
    },
    {
      Header: 'Tuesday',
      accessor: 'tasks'
    },
    {
      Header: 'Wednesday',
      accessor: 'tasks'
    },
    {
      Header: 'Thursday',
      accessor: 'tasks'
    },
    {
      Header: 'Friday',
      accessor: 'tasks'
    }
    // ,{
    //   Header: 'Age',
    //   accessor: 'age',
    //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }
  ]
    
    return (
      <section className="app">
        <div className="list-container">
          {list}
        </div>
        <ReactTable
          data={data}
          columns={columns}
        />
      </section>
    );
  }
}

export default App;
