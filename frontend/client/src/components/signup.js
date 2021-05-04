    import React, { useState } from "react"
    import axios from "axios"

    const SignUp = () => {

        const initialState = {username :'', email:'', password:'', role:''}
        const [infos, setInfos]= useState(initialState)

      const handleChangeInput = e => {
        const {name, value} = e.target
        // console.log(name , " " , value)
            setInfos({...infos, [name]: value})
        }

        const handelSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3000/api/register', infos).then(response => {
                console.log(response)
            })
            .catch(err => { console.log(err) })

            
       }
      
            return (
                <form onSubmit={handelSubmit}>
                    <h3>Sign Up</h3>

                    <div className="form-group" >
                        <label>First name</label>
                        <input type="username" 
                        className="form-control"
                        placeholder="username" 
                        name="username"
                        onChange={handleChangeInput}
                        />
                    </div>


                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" 
                            className="form-control" 
                            placeholder="email" 
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
                    <div className="form-group">
                    <select className="custom-select" name="role" onChange={handleChangeInput} >
                        <option>select client </option>
                        <option value="admin">Admin</option>
                        <option value="user">Uesr</option>
                        <option value="technicin">Technicien</option>
                    </select>
                    </div>

                    <button type="submit" 
                    className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/">sign in?</a>
                    </p>
                </form>
            );
        }


        export default SignUp
    