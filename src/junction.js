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

class Junction extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      junctionid: '',
      name: '',
      type: '',
      value: 0,
      errors: {
        junctionid: '',
        name: '',
        type: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'junctionid':
        errors.junctionid= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'name':
        errors.name= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'type':
        errors.type= (value.length>0) ? "" : "value should not be empty" ;
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      junctionid: this.state.junctionid,
      name: this.state.name,
      type: this.state.type,
      tablename: "junction"
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

        <div className='junctionid'>
          <label htmlFor="junctionid">Junction Id:</label>
          <input type='text' name='junctionid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.junctionid.length > 0 &&
            <span className='error'>{errors.junctionid}</span>}
        </div>
        <br/>
        <div className='name'>
          <label htmlFor="name">Name :</label>
          <input type='text' name='name' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.name.length > 0 &&
            <span className='error'>{errors.name}</span>}
        </div>
        <br/>
        <div className='type'>
          <label htmlFor="type"> Type :</label>
          <input type='text' name='type' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.type.length > 0 &&
            <span className='error'>{errors.type}</span>}
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

export default Junction;
