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

class Vehicleinfo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      licenseplate: '',
      vehicleid: '',
      colour: '',
      roadid: '',
      licenseno: '',
      value: 0,
      errors: {
        licenseplate: '',
        vehicleid: '',
        colour: '',
        roadid: '',
        licenseno: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'licenseplate':
        errors.licenseplate= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'vehicleid':
        errors.vehicleid= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'colour':
        errors.colour= (value.length>0) ? "" : "value should not be empty" ;
        break;
      case 'roadid':
        errors.roadid= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'licenseno':
        errors.licenseno= (value.length>0) ? "" : "value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      licenseplate: this.state.licenseplate,
      vehicleid: this.state.vehicleid,
      colour: this.state.colour,
      roadid: this.state.roadid,
      licenseno: this.state.licenseno,
      tablename: "vehicleinfo"
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

        <div className='licenseplate'>
          <label htmlFor="licenseplate">License Plate:</label>
          <input type='text' name='licenseplate' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.licenseplate.length > 0 &&
            <span className='error'>{errors.licenseplate}</span>}
        </div>
        <br/>
        <div className='vehicleid'>
          <label htmlFor="vehicleid">Vehicle Id:</label>
          <input type='text' name='vehicleid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.vehicleid.length > 0 &&
            <span className='error'>{errors.vehicleid}</span>}
        </div>
        <br/>
        <div className='colour'>
          <label htmlFor="colour"> Colour:</label>
          <input type='text' name='colour' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.colour.length > 0 &&
            <span className='error'>{errors.colour}</span>}
        </div>
        <br/>
        <div className='roadid'>
          <label htmlFor="roadid">Road id:</label>
          <input type='text' name='roadid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.roadid.length > 0 &&
            <span className='error'>{errors.roadid}</span>}
        </div>
        <br/>
        <div className='licenseno'>
          <label htmlFor="licenseno">License no:</label>
          <input type='text' name='licenseno' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.licenseno.length > 0 &&
            <span className='error'>{errors.licenseno}</span>}
        </div>
        <br/>
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

export default Vehicleinfo;
