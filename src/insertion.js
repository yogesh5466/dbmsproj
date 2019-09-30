import React from 'react';
import './App.css';
import Vehicleinfo from './vehicleinfo';
import License from './license';
import Junction from './junction';
import Road from './road';
import Station from './station';
import Personaldetail from './persondetail';
import Type from './type';
import Traffic from './traffic';
import TrafficPolice from './trafficpolice';
import App from './App';

class Insertion extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      table: [
        {key:'Select', name: 'Select a table' },
        {key:'Vehicleinfo', name: 'Vehicleinfo' },
        {key:'Road' ,name: 'Road' },
        {key:'Junction' ,name: 'Junction'},
        {key:'Type' ,name: 'Type'},
        {key:'Traffic' ,name: 'Traffic'},
        {key:'TrafficPolice' ,name: 'TrafficPolice'},
        {key:'Station' ,name: 'Station'},
        {key:'License' ,name: 'License'},
        {key:'PersonalDetail' ,name: 'PersonalDetail'}
      ],
      value: 0,
      currenttable: 'Select a table'
    };
   }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case 'table':
      this.setState({currenttable: value});
        break;
      default:
        break;
    }
  }
  handleClicks = e => {
    e.preventDefault();
    this.setState({value: 1});
  }

  render(){
    switch (this.state.currenttable) {
      case 'Select a table':
      if(this.state.value===1){
        return (<App />);
      }
      else{
        return (
          <div>
          <div className='bar'>
          <li><a href="" onClick={this.handleClicks}>Home</a></li>
          <li><a href="http://localhost:3000">Signout</a></li>
          </div>
          <div className="wrap">
          <form className='form-wrap'>

          <div className='table'>
            <label htmlFor="table">table:</label>
            <select name="table" onChange={this.handleChange} onBlur={this.handleChange}>
            {
                this.state.table.map((c, i) => {
                  return <option key={i}>{c.name}</option>
                })
              }
            </select>
          </div>
          <br/>
          <br/>
          </form>
          </div>
          </div>
        );
      }
        break;
      case 'Vehicleinfo':
        return (<Vehicleinfo />);
        break;
      case 'Road':
        return (<Road />);
        break;
      case 'Junction':
        return (<Junction />);
        break;
      case 'Type':
        return (<Type />);
        break;
      case 'Traffic':
        return (<Traffic />);
        break;
      case 'TrafficPolice':
       return (<TrafficPolice />);
       break;
      case 'Station':
        return (<Station />);
        break;
      case 'License':
        return (<License />);
        break;
      case 'PersonalDetail':
        return (<Personaldetail />);
        break;
      default:
        break;
    }
}
}

export default Insertion;
