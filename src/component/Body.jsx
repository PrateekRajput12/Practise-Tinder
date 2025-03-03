import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
// import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
    // const [user,set]
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector((store) => store.user)
    const fetchUser = async () => {
        if (userData) {
            return
        }
        try {
            const user = await axios.get(BASE_URL + '/profile/view',
                { withCredentials: true }
            )

            dispatch(addUser(user.data))


        } catch (error) {
            if (error.status === 401) {
                navigate("/login")
            }
            console.log("eroor", error);
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
            {/* <Footer /> */}
        </div>
    )
}

export default Body