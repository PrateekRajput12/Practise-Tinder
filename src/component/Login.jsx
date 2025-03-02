import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constant'

const Login = () => {

    const [emailId, setemailId] = useState("kaju@gmail.com")
    const [password, setpassword] = useState("Kaju@123")
    const handleLogin = async () => {

        try {
            const res = await axios.post(BASE_URL + '/login', {
                password,
                emailId
            })
            console.log("res", res);

        } catch (e) {
            console.log("Error in Logining ", e);
        }
    }
    return (
        <div>
            <div className="card mt-[2rem] card-dash bg-base-300 w-96 m-auto">
                <div className="card-body flex flex-col items-center justify-between">
                    <h2 className="card-title">Login</h2>
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <div className='w-[100%]'>
                        <fieldset className="fieldset">

                            <form>
                                <legend className="fieldset-legend"> <label htmlFor='emailId'>Email {emailId}</label>
                                </legend>
                                <input type="email" value={emailId} id='emailId' className="input" placeholder="Type here" onChange={(e) => setemailId(e.target.value)} />

                                <legend className="fieldset-legend"> <label htmlFor='password'>Password {password}</label>
                                </legend>
                                <input type="password" autoComplete='false' value={password} id='password' className="input" placeholder="Type here" onChange={(e) => setpassword(e.target.value)} />

                            </form>
                        </fieldset>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleLogin} >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login