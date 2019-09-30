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

class Station extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      stationid: '',
      stationname: '',
      area: '',
      incharge: '',
      value: 0,
      errors: {
        stationid: '',
        stationname: '',
        area: '',
        incharge: ''
         }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'stationid':
        errors.stationid= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'stationname':
        errors.stationname= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'area':
        errors.area= (value.length>0) ? "" : "value should not be empty" ;
        break;
      case 'incharge':
        errors.incharge= (value.length>0) ? "" :"value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      stationid: this.state.stationid,
      stationname: this.state.stationname,
      area: this.state.area,
      incharge: this.state.incharge,
      tablename: "station"
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

        <div className='stationid'>
          <label htmlFor="stationid">Station Id:</label>
          <input type='text' name='stationid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.stationid.length > 0 &&
            <span className='error'>{errors.stationid}</span>}
        </div>
        <br/>
        <div className='stationname'>
          <label htmlFor="stationname">Station Name :</label>
          <input type='text' name='stationname' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.stationname.length > 0 &&
            <span className='error'>{errors.stationname}</span>}
        </div>
        <br/>
        <div className='area'>
          <label htmlFor="area"> Area :</label>
          <input type='text' name='area' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.area.length > 0 &&
            <span className='error'>{errors.area}</span>}
        </div>
        <br/>
        <div className='incharge'>
          <label htmlFor="incharge">Incharge :</label>
          <input type='text' name='incharge' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.incharge.length > 0 &&
            <span className='error'>{errors.incharge}</span>}
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

export default Station;
