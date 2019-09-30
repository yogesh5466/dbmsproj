import React from 'react';
import './App.css';
import axios from 'axios';
import App from './App';


const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  console.log(valid);
  return valid;
}

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      value: 0,
      errors: {
        username: '',
        password: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'password':
        errors.password= (value.length>0) ?  "": "value should not be empty" ;
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    if(validateForm(this.state.errors)) {
      axios.post(`http://localhost:3001/login`,data)
        .then(res => {
          if(res.data){
            this.setState({value: 1});
          }
          else{
            alert("Invalid Credentials");
          }
        })
    }else{
      alert('Invalid Form');
    }
  }

  render(){
    const {errors} = this.state;
    if(this.state.value===1){
      return (<App />);
    }
    else{
      return (
        <div className="wrapper">
        <p>Traffic Monitoring System</p>
        <form className='form-wrapper' onSubmit={this.handleSubmit}>

        <div className='username'>
          <label htmlFor="username">Username :</label>
          <input type='text' name='username' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.username.length > 0 &&
            <span className='error'>{errors.username}</span>}
        </div>
        <br/>
        <div className='password'>
          <label htmlFor="password">Password :</label>
          <input type='password' name='password' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.password.length > 0 &&
            <span className='error'>{errors.password}</span>}
        </div>
        <br/>
        <br/>
        <div className='submit'>
          <button>Submit</button>
        </div>

        </form>
        </div>
      );
    }
  }
}

export default Login;
