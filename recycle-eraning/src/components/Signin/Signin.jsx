import React, { useEffect, useRef, useState } from 'react'
import "./Signin.css"
import {Link} from "react-router-dom"
import Google from "./Gmail.svg"
import {createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import {auth,db} from "../../firebase"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {
  getFirestore,
  query,  getDocs,
   collection,
  where, addDoc,setDoc} from "firebase/firestore";




function Signin({setShowSign}) {


    const componentRef = useRef();
    const handleClickOutside = (event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            setShowSign(false)
        }
      }
    
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [showPassword, setShowPassword] =useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleSubmit = async (e) => {
    
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(collection(db, "users",user.uid), {
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  

  const [Content,setContent]=useState(false)
  const [value, setValue] = useState()
  const [email,setEmail]=useState('')
  const [password,setPassword] = useState('')  
  
  
  const handleSingin=(e)=>{
    e.preventDefault()
    setContent(false)
  }



  const handleRegister=(e)=>{
    e.preventDefault()
    setContent(true)
  }



  return (
    <div className="singin-wrapper">
        <div className="signin-container" >
        
            <div className="singin-content" ref={componentRef}>
            
                <div className="buttons">
                  <button onClick={handleSingin}>Signin</button>
                  <p>|</p>
                  <button onClick={handleRegister}>register</button>
                </div>
                {!Content?
                <>
                <form action="">
                    <TextField sx={{width:"80%",p:"0px 5px",background:"#ffff",border:"20px" }} id="outlined-basic" 
                    label="email" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <FormControl sx={{ m: 1,width:"80%",p:"2px 5px",background:"#ffff" }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                      <FilledInput
                        value={password}
                        onChange={setPassword}
                        sx={{background:"#fff"}}
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment sx={{background:"#e1e1e1"}} position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              
                                    >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                        />
                      </FormControl>
                                
                 
                  <button type="submit" >Sign in</button>
                </form>
                <div className="or-container">
                  <hr />
                  <p>OR</p>
                  <hr />
                </div>

                  <img src={Google} alt="Google" className="google"/>
                  </>
                  :
                 <>
                 <form action="">
                    <TextField sx={{ m: 1,width:"80%",padding:"2px 5px",background:"#ffff",border:"20px" }} id="outlined-basic" label="email" variant="outlined" />
                   
                    <TextField sx={{ m: 1,width:"80%",padding:"2px 5px",background:"#ffff",border:"20px" }} id="outlined-basic" label="UserName" variant="outlined" />
                    <TextField sx={{ m: 1,width:"80%",padding:"2px 5px",background:"#ffff",border:"20px" }} id="outlined-basic" label="FullName" variant="outlined" />
                    <FormControl sx={{ m: 1,width:"80%",padding:"2px 5px",background:"#ffff" }} variant="filled">
                      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                      <FilledInput
                        sx={{background:"#fff"}}
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment sx={{background:"#e1e1e1"}} position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              
                                    >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                        />
                      </FormControl>
                                
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}/>

                    
                  <button type="submit"  onSubmit={handleSubmit}>Register</button>
                </form>
                <div className="or-container">
                  <hr />
                  <p>OR</p>
                  <hr />
                </div>

                  <img src={Google} alt="Google" className="google"/>
                 </>
                  }     
            </div>
            
        </div>
    </div>
  )
}

export default Signin