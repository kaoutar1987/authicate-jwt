
import React, {useState} from "react";
import axios from "axios"
axios.defaults.withCredentials = true

const Login=()=>{
    const initialState = { email:'', password:''}
    const [infos, setInfos]= useState(initialState)

  const handleChangeInput = e => {
    const {name, value} = e.target
    // console.log(name , " " , value)
        setInfos({...infos, [name]: value})
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/Login', infos, { withCredentials: true }).then(response => {
            console.log(response)
        })
        .catch(err => { console.log(err) })

        
   }
  
    
        return (
            <form onSubmit={handelSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                     className="form-control"
                      placeholder=" email"
                      name="email"
                     onChange={handleChangeInput}  
                     />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                     className="form-control"
                     placeholder="password"
                     name="password"
                     onChange={handleChangeInput}
                     />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
    }
    export default Login