import React from 'react'
import { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser } from '../utils/userSlice'
const EditProfile = ({ user }) => {

    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    const [error, seterror] = useState('')
    const [firstName, setfirstName] = useState(user.firstName)
    const [lastName, setlastName] = useState(user.lastName)
    const [age, setage] = useState(user.age)
    const [skills, setskills] = useState(user.skills)
    const [photoURL, setphotoURl] = useState(user.photoURL)
    const [about, setabout] = useState(user.about)

    const [gender, setgender] = useState(user.gender)
    const dispatch = useDispatch()


    const handleSave = async () => {


        try {
            const res = await axios.patch(BASE_URL + '/profile/edit', {

                about,
                gender,
                skills,
                age

            }, {
                withCredentials: true
            })
            console.log("res", res);
            dispatch(addUser(res.data))
            // return navigate("/feed")
        } catch (e) {
            seterror(e?.response?.data)
            console.log("Error in Logining ", e);
        }
    }
    return (
        <div className='flex justify-center items-center gap-[5rem] mt-[2rem]'>
            <div>
                {user && <div className="card mt-[2rem] card-dash bg-base-300 w-96 m-auto">
                    <div className="card-body flex flex-col items-center justify-between">
                        <h2 className="card-title">Edit Profile</h2>
                        {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                        <div className='w-[100%]'>
                            <fieldset className="fieldset">

                                <form>
                                    <legend className="fieldset-legend"> <label htmlFor='firstName'>First Name </label>
                                    </legend>
                                    <input type="text" value={firstName} id='firstName' className="input" placeholder="Type here" onChange={(e) => setfirstName(e.target.value)} />

                                    <legend className="fieldset-legend"> <label htmlFor='lastName'>Last Name </label>
                                    </legend>
                                    <input type="text" autoComplete='false' value={lastName} id='lastName' className="input" placeholder="Type here" onChange={(e) => setlastName(e.target.value)} />

                                    <legend className="fieldset-legend"> <label htmlFor='about'>About</label>
                                    </legend>
                                    <input type="text" autoComplete='false' value={about} id='about' className="input" placeholder="Type here" onChange={(e) => setabout(e.target.value)} />

                                    <legend className="fieldset-legend"> <label htmlFor='gender'>Gender</label>
                                    </legend>
                                    <input type="text" autoComplete='false' value={gender} id='gender' className="input" placeholder="Type here" onChange={(e) => setgender(e.target.value)} />


                                    <legend className="fieldset-legend"> <label htmlFor='skills'>Skills</label>
                                    </legend>
                                    <input type="text" autoComplete='false' value={skills} id='skills' className="input" placeholder="Type here" onChange={(e) => setskills(e.target.value)} />


                                    <legend className="fieldset-legend"> <label htmlFor='photoURL'>Photo URL</label>
                                    </legend>
                                    <input type="text" autoComplete='false' value={photoURL} id='skills' className="input" placeholder="Type here" onChange={(e) => setphotoURl(e.target.value)} />

                                </form>
                            </fieldset>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>}
            </div>
            <UserCard user={{ firstName, lastName, age, gender, about, skills, photoURL }}></UserCard>
            <div className="toast toast-top mt-[4rem] toast-start">

                {error && <div className="alert alert-success">
                    <span>{error}</span>
                </div>}
            </div>
        </div>
    )
}


export default EditProfile