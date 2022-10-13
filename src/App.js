import logo from './logo.svg';
// import './App.css';
import Login from './css/login.module.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // const [Email,SetEmail]=useState('');
  // const [Password,SetPassword]=useState('');
  const [state,setState]=useState({
    email:"",
    password:"",
  });

  const handleChange=({target})=>{
   setState({...state,[target.name]:target.value});
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     axios.defaults.withCredentials = true;
     axios.get('https://crud-laravel-app.fly.dev/sanctum/csrf-cookie').then(response => {
      
      axios.post('https://crud-laravel-app.fly.dev/api/login',state).then(res => {
      
     
  });
 
  });
  }
  return (
    <div className="App">
      <header className="App-header">
        <form className={Login.login} onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name="email" value={state.email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input name="password" value={state.password} type="password" class="form-control" id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        <div class="mb-3 form-check">
          <input  type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </header>
    </div>
  );
}

export default App;
