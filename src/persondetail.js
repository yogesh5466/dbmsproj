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

class Personaldetail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      aadharno: '',
      age: '',
      sex: '',
      value: 0,
      errors: {
        aadharno: '',
        age: '',
        sex: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'aadharno':
        errors.aadharno= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'age':
        errors.age= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'sex':
        errors.sex= (value.length>0) ? "" : "value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      aadharno: this.state.aadharno,
      age: this.state.age,
      sex: this.state.sex,
      tablename: "personaldetail"
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
        <div className="wrapper1">
        <form className='form-wrapper' onSubmit={this.handleSubmit}>

        <div className='aadharno'>
          <label htmlFor="aadharno">Aadhar No:</label>
          <input type='text' name='aadharno' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.aadharno.length > 0 &&
            <span className='error'>{errors.aadharno}</span>}
        </div>
        <br/>
        <div className='age'>
          <label htmlFor="age">Age:</label>
          <input type='number' name='age' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.age.length > 0 &&
            <span className='error'>{errors.age}</span>}
        </div>
        <br/>
        <div className='sex'>
          <label htmlFor="sex">sex:</label>
          <input type='text' name='sex' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.sex.length > 0 &&
            <span className='error'>{errors.sex}</span>}
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

export default Personaldetail;
