import React from 'react';
import './App.css';
import axios from 'axios';
import App from './App';

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class TrafficPolice extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tpid: '',
      stationid: '',
	    aadharno : '',
	    junctionid: '',
      value: 0,
      errors: {
        tpid: '',
        name: '',
        stationid: '',
	      aadharno : '',
	      junctionid: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'tpid':
        errors.tpid= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case  'stationid':
        errors.stationid= (value.length>0) ? "" :"value should not be empty" ;
          break;
		  case  'aadharno':
        errors.aadharno= (value.length>0) ? "" :"value should not be empty" ;
          break;
		  case  'junctionid':
        errors.junctionid= (value.length>0) ? "" :"value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      tpid : this.state.tpid,
      stationid: this.state.stationid,
      aadharno: this.state.aadharno,
      junctionid: this.state.junctionid,
      tablename: "trafficpolice"
    };
    if(validateForm(this.state.errors)) {
      axios.post('http://localhost:3001/insert',data)
        .then(res => {
          if(res.data){
            alert('Data Inserted');
          }
          else{
            alert('Data not Inserted');
          }
        })
    }else{
      alert('Invalid Form');
    }
  }
  handleClicks = e => {
    e.preventDefault();
    this.setState({value: 1});
  }
  render(){
    const {errors} = this.state;
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
        <div className="wrapper">
        <form className='form-wrapper' onSubmit={this.handleSubmit}>


        <div className='tpid'>
          <label htmlFor="tpid">TP Id:</label>
          <input type='text' name='tpid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.tpid.length > 0 &&
            <span className='error'>{errors.tpid}</span>}
        </div>
        <br/>
        <div className= 'stationid'>
          <label htmlFor= "stationid">Station Id:</label>
          <input type='text' name=  'stationid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.stationid.length > 0 &&
            <span className='error'>{errors.stationid}</span>}
        </div>
        <br/>
  	   <div className= 'aadharno'>
          <label htmlFor= "aadharno">Aadhar No:</label>
          <input type='text' name=  'aadharno' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.aadharno.length > 0 &&
            <span className='error'>{errors.aadharno}</span>}
        </div>
        <br/>
  	   <div className= 'junctionid'>
          <label htmlFor= "junctionid">Junction Id:</label>
          <input type='text' name=  'junctionid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.junctionid.length > 0 &&
            <span className='error'>{errors.junctionid}</span>}
        </div>
        <br/>
        <div className='submit'>
          <button>Submit</button>
        </div>

        </form>
        </div>
        </div>
      );
    }
  }
}

export default TrafficPolice;
