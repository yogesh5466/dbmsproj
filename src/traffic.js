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

class Traffic extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      roadid: '',
      bike: '',
      car: '',
	    jeep: '',
	    bus: '',
	    total: '',
      value: 0,
      errors: {
	       roadid: '',
         bike: '',
         car: '',
	       jeep: '',
	       bus: '',
	       total: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'roadid':
        errors.roadid= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'bike':
        errors.bike= (value.length>0) ? "" : "value should not be empty" ;
        break;
      case  'car':
        errors.car= (value.length>0) ? "" :"value should not be empty" ;
          break;
		  case  'jeep':
        errors.jeep= (value.length>0) ? "" :"value should not be empty" ;
          break;
		  case  'bus':
        errors.bus= (value.length>0) ? "" :"value should not be empty" ;
          break;
		  case  'total':
        errors.total= (value.length>0) ? "" :"value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      roadid: this.state.roadid,
      bike: this.state.bike,
      car: this.state.car,
      jeep: this.state.jeep,
      bus: this.state.bus,
      total: this.state.total,
      tablename: "traffic"
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


        <div className='roadid'>
          <label htmlFor="roadid">Road Id:</label>
          <input type='text' name='roadid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.roadid.length > 0 &&
            <span className='error'>{errors.roadid}</span>}
        </div>
        <br/>
        <div className='bike'>
          <label htmlFor="bike">Bike:</label>
          <input type='number' name='bike' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.bike.length > 0 &&
            <span className='error'>{errors.bike}</span>}
        </div>
        <br/>
        <div className= 'car'>
          <label htmlFor= "car">Car:</label>
          <input type='number' name=  'car' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.car.length > 0 &&
            <span className='error'>{errors.car}</span>}
        </div>
        <br/>
  	   <div className= 'jeep'>
          <label htmlFor= "jeep">Jeep:</label>
          <input type='number' name=  'jeep' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.jeep.length > 0 &&
            <span className='error'>{errors.jeep}</span>}
        </div>
        <br/>
  	   <div className= 'bus'>
          <label htmlFor= "bus">Bus:</label>
          <input type='number' name=  'bus' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.bus.length > 0 &&
            <span className='error'>{errors.bus}</span>}
        </div>
        <br/>
  	   <div className= 'total'>
          <label htmlFor= "total">Total:</label>
          <input type='number' name=  'total' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.total.length > 0 &&
            <span className='error'>{errors.total}</span>}
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

export default Traffic;
