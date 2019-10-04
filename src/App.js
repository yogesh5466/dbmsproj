import React from 'react';
import './App.css';
import Insertion from './insertion';
import Listing from './listing';
import Trafficdetail from './trafficdetail';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      no: 0,
    };
   }

  handleChange = e => {
    e.preventDefault();
    const {name} = e.target;
    switch (name) {
      case 'insertion':
          this.setState({no: 1});
        break;
      case 'deletion':
          this.setState({no: 2});
        break;
      case 'listing':
          this.setState({no: 4});
          break;
      default:
        break;
    }
  }


  render(){
    if(this.state.no===0){
      return (
        <div>
        <div className='bar'>
        <li><a href="http://localhost:3000">Signout</a></li>
        </div>
        <div className='w'>
        <div className='insertion'>
          <button className='but' name='insertion' onClick={this.handleChange}>INSERTION</button>
        </div>
        <div className='deletion'>
          <button className='but' name='deletion' onClick={this.handleChange}>Traffic Detail</button>
        </div>
        <div className='listing'>
          <button className='but' name='listing' onClick={this.handleChange}>LIST</button>
        </div>
        </div>
        </div>
      )
    }
    if(this.state.no===1){
      return (<Insertion />);
    }
    if(this.state.no===2){
      return (<Trafficdetail />);
    }
    if(this.state.no===4){
      return (<Listing />);
    }
  }
}

export default App;
