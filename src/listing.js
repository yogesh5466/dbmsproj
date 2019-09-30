import React from 'react';
import './App.css';
import axios from 'axios';

class Listing extends React.Component{

  constructor(props) {
    super(props);
   }

  handleChange = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/display',"")
      .then(res => {
        let s = ""
        res.data.forEach(data => s = s+"roadid:"+data.roadid+","+"bike:"+data.bike+","+"car:"+data.car+","+"jeep:"+data.jeep+","+"bus:"+data.bus+","+"total:"+data.total+"\n");
        alert(s);
      })
    }


  render(){
    return (
      <div>
      <button className='but' name='listing' onClick={this.handleChange}>display</button>
      </div>
    );
}
}

export default Listing;
