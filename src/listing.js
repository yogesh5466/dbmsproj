import React from 'react';
import './App.css';
import axios from 'axios';
import { Button,  Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Listing extends React.Component{

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
       currenttable: 'Select a table',
       content: []
     };
    }

   handleChange = e => {
     e.preventDefault();
     const { name, value } = e.target;
     switch (name) {
       case 'table':
       this.setState({currenttable: value});
       let data = {
         'tablename': value
       }
       axios.post('http://localhost:3001/display',data)
         .then(res => {
           if(res.data===false){
             alert("data cannot be fetched")
           }
           else{
             this.setState({content: res.data})
           }
         })
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
         return (
           <div>
        <Table striped bordered hover>
        <thead>
        <tr>
        <th>licenseplate</th>
        <th>vehicleid</th>
        <th>colour</th>
        <th>roadid</th>
        <th>licenseno</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.content.map((c,i) => {
            return <tr><td>{c.licenseplate}</td><td>{c.vehicleid}</td><td>{c.colour}</td><td>{c.roadid}</td><td>{c.licenseno}</td></tr>
          })
        }
        </tbody>
        </Table>
           </div>
         );
         break;
       case 'Road':
         return (
           <div>
           <Table striped bordered hover>
           <thead>
           <tr>
           <th>roadid</th>
           <th>town</th>
           <th>junctionid</th>
           <th>to</th>
           <th>from</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.content.map((c,i) => {
               return <tr><td>{c.roadid}</td><td>{c.town}</td><td>{c.junctionid}</td><td>{c.to}</td><td>{c.from}</td></tr>
             })
           }
           </tbody>
           </Table>
           </div>
         );
         break;
       case 'Junction':
         return (
           <div>
           <Table striped bordered hover>
           <thead>
           <tr>
           <th>junctionid</th>
           <th>name</th>
           <th>type</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.content.map((c,i) => {
               return <tr><td>{c.junctionid}</td><td>{c.name}</td><td>{c.type}</td></tr>
             })
           }
           </tbody>
           </Table>
           </div>
         );
         break;
       case 'Type':
         return (
           <div>
           <Table striped bordered hover>
           <thead>
           <tr>
           <th>vehicleid</th>
           <th>Type</th>
           <th>model</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.content.map((c,i) => {
               return <tr><td>{c.vehicleid}</td><td>{c.type}</td><td>{c.model}</td></tr>
             })
           }
           </tbody>
           </Table>
           </div>
         );
         break;
       case 'Traffic':
         return (
           <div>
           <Table striped bordered hover>
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
         );
         break;
       case 'TrafficPolice':
        return (
          <div>
          <Table striped bordered hover>
          <thead>
          <tr>
          <th>tpid</th>
          <th>name</th>
          <th>stationid</th>
          <th>aadharno</th>
          <th>junctionid</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.content.map((c,i) => {
              return <tr><td>{c.tpid}</td><td>{c.name}</td><td>{c.stationid}</td><td>{c.aadharno}</td><td>{c.junctionid}</td></tr>
            })
          }
          </tbody>
          </Table>
          </div>
        );
        break;
       case 'Station':
         return (
           <div>
           <Table striped bordered hover>
           <thead>
           <tr>
           <th>stationid</th>
           <th>stationname</th>
           <th>area</th>
           <th>incharge</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.content.map((c,i) => {
               return <tr><td>{c.stationid}</td><td>{c.stationname}</td><td>{c.area}</td><td>{c.incharge}</td></tr>
             })
           }
           </tbody>
           </Table>
           </div>

         );
         break;
       case 'License':
         return (
           <div>
           <Table striped bordered hover>
           <thead>
           <tr>
           <th>licenseno</th>
           <th>firstname</th>
           <th>lastname</th>
           <th>issuedon</th>
           <th>expirydate</th>
           <th>Type</th>
           <th>dob</th>
           <th>phoneno</th>
           <th>address</th>
           <th>state</th>
           <th>bloodgroup</th>
           <th>fathersname</th>
           <th>aadharno</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.content.map((c,i) => {
               return <tr><td>{c.licenseno}</td><td>{c.firstname}</td><td>{c.lastname}</td><td>{c.issuedon}</td><td>{c.expirydate}</td><td>{c.type}</td><td>{c.dob}</td><td>{c.phoneno}</td><td>{c.address}</td><td>{c.state}</td><td>{c.bloodgroup}</td><td>{c.fathersname}</td><td>{c.aadharno}</td></tr>
             })
           }
           </tbody>
           </Table>
           </div>

         );
         break;
       case 'PersonalDetail':
         return (
           <div>
           <Table striped bordered hover>
           <thead>
           <tr>
           <th>aadharno</th>
           <th>age</th>
           <th>sex</th>
           </tr>
           </thead>
           <tbody>
           {
             this.state.content.map((c,i) => {
               return <tr><td>{c.aadharno}</td><td>{c.age}</td><td>{c.sex}</td></tr>
             })
           }
           </tbody>
           </Table>
           </div>

         );
         break;
       default:
         break;
     }
 }
}

export default Listing;
