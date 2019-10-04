import React from 'react';
import './App.css';
import { Button,  Form, Table, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import axios from 'axios';

class Trafficdetail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      content: [],
      highesttot: 0,
      roadid: '',
      avgbike: 0,
      avgbus: 0,
      avgcar: 0,
      avgjeep: 0,
      count: 0
    }
    axios.post('http://localhost:3001/display',{
      'tablename': 'traffic'
    })
      .then(res => {
        if(res.data===false){
          alert("data cannot be fetched")
        }
        else{
          this.setState({content: res.data})
          console.log(res.data)
          this.state.content.map((c,i) => {
            this.state.count=this.state.count+1;
            if(c.total>this.state.highesttot){
              this.setState({roadid: c.roadid,highesttot: c.total})
            }
            this.state.avgbike=this.state.avgbike+c.bike;
            this.state.avgbus=this.state.avgbus+c.bus;
            this.state.avgcar=this.state.avgcar+c.car;
            this.state.avgjeep=this.state.avgjeep+c.jeep;
          })
          this.state.avgbike=this.state.avgbike/this.state.count;
          this.state.avgbus=this.state.avgbus/this.state.count;
          this.state.avgjeep=this.state.avgjeep/this.state.count;
          this.state.avgcar=this.state.avgcar/this.state.count;
          this.setState({avgbike: this.state.avgbike,avgbus: this.state.avgbus,avgcar: this.state.avgcar,avgjeep: this.state.avgjeep})
        }
      })
   }

  handleChange = e => {
    e.preventDefault();
    const {name} = e.target;
    switch (name) {
      default:
        break;
    }
  }

  handleClicks = e => {
    e.preventDefault();
    this.setState({value: 1});
  }


  render(){
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
        <div id="container">
        <Table striped bordered hover variant="dark" size="lg">
        <thead>
        <tr>
        <th>roadid</th>
        <th>bike</th>
        <th>car</th>
        <th>jeep</th>
        <th>bus</th>
        <th>total</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.content.map((c,i) => {
            return <tr><td>{c.roadid}</td><td>{c.bike}</td><td>{c.car}</td><td>{c.jeep}</td><td>{c.bus}</td><td>{c.total}</td></tr>
          })
        }
        </tbody>
        </Table>
        </div>
        <div>
        <Badge className="t" variant="danger">Highest Traffic Road Id:</Badge><p className="t">{this.state.roadid}</p>
        </div>
        <div>
        <Badge className="t" variant="danger">Highest Traffic Total:</Badge><p className="t">{this.state.highesttot}</p>
        </div>
        <div>
        <Badge className="t" variant="dark">Average Buses:</Badge><p className="t">{this.state.avgbus}</p>
        </div>
        <div>
        <Badge className="t" variant="dark">Average Bikes:</Badge><p className="t">{this.state.avgbike}</p>
        </div>
        <div>
        <Badge className="t" variant="dark">Average Jeeps:</Badge><p className="t">{this.state.avgjeep}</p>
        </div>
        <div>
        <Badge className="t" variant="dark">Average Cars:</Badge><p className="t">{this.state.avgcar}</p>
        </div>
        </div>
      );
    }
  }
}

export default Trafficdetail;
