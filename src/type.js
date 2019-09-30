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

class Type extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      vehicleid: '',
      type: '',
      model: '',
      value: 0,
      errors: {
        vehicleid: '',
        type: '',
        model: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'vehicleid':
        errors.vehicleid= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'type':
        errors.type= (value.length>0) ? "" : "value should not be empty" ;
        break;
      case  'model':
        errors.model= (value.length>0) ? "" :"value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      vehicleid: this.state.vehicleid,
      type: this.state.type,
      model: this.state.model,
      tablename: "type"
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


        <div className='vehicleid'>
          <label htmlFor="vehicleid">Vehicle Id:</label>
          <input type='text' name='vehicleid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.vehicleid.length > 0 &&
            <span className='error'>{errors.vehicleid}</span>}
        </div>
        <br/>
        <div className='type'>
          <label htmlFor="type">Type:</label>
          <input type='text' name='type' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.type.length > 0 &&
            <span className='error'>{errors.type}</span>}
        </div>
        <br/>
        <div className= 'model'>
          <label htmlFor= "model">Model:</label>
          <input type='text' name=  'model' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.model.length > 0 &&
            <span className='error'>{errors.model}</span>}
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

export default Type;
