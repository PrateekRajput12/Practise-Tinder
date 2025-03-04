import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constant'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {
    const user = useSelector(store => store.user)
    // console.log(user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            const user = await axios.post(BASE_URL + '/logout', {},
                { withCredentials: true }
            )
            dispatch(removeUser())
            return navigate("/login")
        } catch (error) {
            console.log("error In logout", error);
        }
    }
    return (
        <div className="navbar bg-base-200 px-[2rem]">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost text-xl">NamasteTinder💀</Link>
            </div>
            {user && <div className="flex justify-between items-center gap-5">


                <div className="form-control">
                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                    {/* <p>Welcome {user.firstName}</p> */}
                    <p>Welcome {user.firstName}</p>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={'/profile'} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default NavBar