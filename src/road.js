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

class Road extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      roadid: '',
      town: '',
      junctionid: '',
      to: '',
      from: '',
      value: 0,
      errors: {
        roadid: '',
        town: '',
        junctionid: '',
        to: '',
        from: ''
      }
    };
   }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'roadid':
        errors.roadid= (value.length>0) ? "" : "value should not be empty";
        break;
      case 'town':
        errors.town= (value.length>0) ?  "": "value should not be empty" ;
        break;
      case 'junctionid':
        errors.junctionid= (value.length>0) ? "" : "value should not be empty" ;
        break;
      case 'to':
        errors.to= (value.length>0) ? "" :"value should not be empty" ;
          break;
      case 'from':
        errors.from= (value.length>0) ? "" : "value should not be empty" ;
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
      town: this.state.town,
      junctionid: this.state.junctionid,
      to: this.state.to,
      from: this.state.from,
      tablename: "road"
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
        <div className='town'>
          <label htmlFor="town">Town :</label>
          <input type='text' name='town' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.town.length > 0 &&
            <span className='error'>{errors.town}</span>}
        </div>
        <br/>
        <div className='junctionid'>
          <label htmlFor="junctionid"> Junction Id:</label>
          <input type='text' name='junctionid' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.junctionid.length > 0 &&
            <span className='error'>{errors.junctionid}</span>}
        </div>
        <br/>
        <div className='to'>
          <label htmlFor="to">To :</label>
          <input type='text' name='to' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.to.length > 0 &&
            <span className='error'>{errors.to}</span>}
        </div>
        <br/>
        <div className='from'>
          <label htmlFor="from">From :</label>
          <input type='text' name='from' onChange={this.handleChange} onBlur={this.handleChange}/>
          {errors.from.length > 0 &&
            <span className='error'>{errors.from}</span>}
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

export default Road;
