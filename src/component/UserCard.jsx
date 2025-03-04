import React from 'react'

const UserCard = ({ user }) => {
    const { firstName, lastName, photoURL, skills, about, age, gender } = user

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={photoURL}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{gender + " , " + age}</p>
                <p>{about}</p>
                <div className="card-actions justify-center gap-[1rem]">
                    <button className="btn btn-primary">Interested</button>
                    <button className="btn btn-secondary">Ignore</button>

                </div>
            </div>
        </div >
    )
}

export default UserCard