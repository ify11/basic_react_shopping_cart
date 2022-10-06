import {useState} from 'react'
import useAuth from '../components/context/hooks/useAuth';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const {dispatch}=useAuth();
  const [inpts,setInps]=useState({username:"",password:""});
  
  const navigate=useNavigate();

  const handleChange=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setInps({...inpts,[name]:value});

  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     
      const username=inpts.username;
      const password=inpts.password;
    
    

     if(username && password) {
      dispatch({type:"login",payload:"3636456"});
      navigate("/",{replace: true});
     }
      }
  return (
    <div className='login'>
    <h2>Please Login</h2>
    <form onSubmit={handleSubmit}>
       <label>Username: <input  name="username" value={inpts.username} onChange={handleChange}/></label>
       <label>Password: <input  type="password" name="password" value={inpts.password} onChange={handleChange}/></label>
       <button>Sign in</button>
    </form>
    </div>
  )
}

export default Login