import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'

const Feed = () => {
    const dispatch = useDispatch()
    const [error, seterror] = useState("")
    const userData = useSelector((store) => store.feed)
    // console.log(user);
    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL + '/feed',
                { withCredentials: true }
            )
            // console.log(res.data);
            dispatch(addFeed(res.data))



        } catch (error) {
            seterror(error?.response?.data)
            setTimeout(() => {
                seterror("")
            }, 2000)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div className='flex justify-center items-center mt-[2rem]'>
            {userData && <UserCard user={userData[0]} />}
            {error && <div className="toast toast-top toast-center">

                <div className="alert alert-success">
                    <span>{error}</span>
                </div>
            </div>}
        </div>
    )
}

export default Feed