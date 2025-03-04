import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import EditProfile from './EditProfile';
import UserCard from './UserCard';

const Profile = () => {
    const userData = useSelector((store) => store.user)
    // console.log("user", userData);
    const dispatch = useDispatch()
    const fetchData = async () => {
        try {
            const res = await axios.get(BASE_URL + '/profile/view',
                { withCredentials: true }

            )
            console.log(res, "profile");
            dispatch(addUser(res.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div>
            {userData && <EditProfile user={userData} />}
        </div>
    )
}

export default Profile