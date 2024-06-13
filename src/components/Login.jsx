import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const[data,changedata]=useState(
        {
            "email":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value},[])
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control" name="password" value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="btn btn-success" onClick={readvalue}>login</button>
                        </div>
                        <div>
                        <Link class="nav-link" to="/signup">signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login