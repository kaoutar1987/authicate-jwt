    import React, { useState, useContext } from "react"
    import axios from "axios"
    import { UserContext } from '../contextApi/Context'

    const SignUp = () => {
        const { setInfos } = useContext(UserContext)

        const initialState = {username :'', email:'', password:'', role:''}
        const [information, setInformation]= useState(initialState)

      const handleChangeInput = e => {
        const {name, value} = e.target
        // console.log(name , " " , value)
        setInformation({...information, [name]: value})
        }

        const handelSubmit = (e) =>{
            e.preventDefault()
            // console.log(information)
            axios.post('http://localhost:3000/api/register', information).then(response => {
                console.log(response)
                setInfos(response.data)
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
                        <option value="admin">admin</option>
                        <option value="user">uesr</option>
                        <option value="technicin">technicien</option>
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
    