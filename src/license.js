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

class License extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      licenseno: '',
      firstname: '',
      lastname: '',
      issuedon: '',
      expirydate: '',
      type:  '',
      dob: '',
      phoneno: '',
      address: '',
      state: '',
      bloodgroup: '',
      fathersname: '',
      aadharno: '',
      value: 0,
      errors: {
        licenseno: '',
        firstname: '',
        lastname: '',
        issuedon: '',
        expirydate: '',
        type:  '',
        dob: '',
        phoneno: '',
        address: '',
        state: '',
        bloodgroup: '',
        fathersname: '',
        aadharno: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'licenseno':
        errors.licenseno= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'firstname':
        errors.firstname= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'lastname':
        errors.lastname= (value.length>0) ? "" : "value should not be empty" ;
        break;
      case 'issuedon':
        errors.issuedon= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'expirydate':
        errors.expirydate= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'type':
        errors.type= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'dob':
        errors.dob= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'phoneno':
        errors.phoneno= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'address':
        errors.address= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'state':
        errors.state= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'bloodgroup':
        errors.bloodgroup= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'fathersname':
        errors.fathersname= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'aadharno':
        errors.aadharno= (value.length>0) ? "" :"value should not be empty" ;
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      licenseno: this.state.licenseno,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      issuedon: this.state.issuedon,
      expirydate: this.state.expirydate,
      type:  this.state.type,
      dob: this.state.dob,
      phoneno: this.state.phoneno,
      address: this.state.address,
      state: this.state.state,
      bloodgroup: this.state.bloodgroup,
      fathersname: this.state.fathersname,
      aadharno: this.state.aadharno,
      tablename: "license"
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

        <div className='licenseno'>
          <label htmlFor="licenseno">License Plate:</label>
          <input type='text' name='licenseno' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.licenseno.length > 0 &&
            <span className='error'>{errors.licenseno}</span>}
        </div>
        <div className='firstname'>
          <label htmlFor="firstname">First Name:</label>
          <input type='text' name='firstname' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.firstname.length > 0 &&
            <span className='error'>{errors.firstname}</span>}
        </div>
        <div className='lastname'>
          <label htmlFor="lastname"> Last Name:</label>
          <input type='text' name='lastname' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.lastname.length > 0 &&
            <span className='error'>{errors.lastname}</span>}
        </div>
        <div className='issuedon'>
          <label htmlFor="issuedon">Issued on:</label>
          <input type='date' name='issuedon' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.issuedon.length > 0 &&
            <span className='error'>{errors.issuedon}</span>}
        </div>
        <div className='expirydate'>
          <label htmlFor="expirydate">Expiry Date:</label>
          <input type='date' name='expirydate' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.expirydate.length > 0 &&
            <span className='error'>{errors.expirydate}</span>}
        </div>
        <div className='type'>
          <label htmlFor="type">Type:</label>
          <input type='text' name='type' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.type.length > 0 &&
            <span className='error'>{errors.type}</span>}
        </div>
        <div className='dob'>
          <label htmlFor="dob">DOB:</label>
          <input type='date' name='dob' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.dob.length > 0 &&
            <span className='error'>{errors.dob}</span>}
        </div>
        <div className='phoneno'>
          <label htmlFor="phoneno">Phoneno:</label>
          <input type='number' name='phoneno' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.phoneno.length > 0 &&
            <span className='error'>{errors.phoneno}</span>}
        </div>
        <div className='address'>
          <label htmlFor="address">Address:</label>
          <input type='text' name='address' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.address.length > 0 &&
            <span className='error'>{errors.address}</span>}
        </div>
        <div className='state'>
          <label htmlFor="state">State:</label>
          <input type='text' name='state' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.state.length > 0 &&
            <span className='error'>{errors.state}</span>}
        </div>
        <div className='bloodgroup'>
          <label htmlFor="bloodgroup">Blood Group:</label>
          <input type='text' name='bloodgroup' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.bloodgroup.length > 0 &&
            <span className='error'>{errors.bloodgroup}</span>}
        </div>
        <div className='fathersname'>
          <label htmlFor="fathersname">Fathers Name:</label>
          <input type='text' name='fathersname' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.fathersname.length > 0 &&
            <span className='error'>{errors.fathersname}</span>}
        </div>
        <div className='aadharno'>
          <label htmlFor="aadharno">Aadhar No:</label>
          <input type='number' name='aadharno' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.aadharno.length > 0 &&
            <span className='error'>{errors.aadharno}</span>}
        </div>
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

export default License;
