import React from 'react'
import { CircularImage } from '../circularImage'

const imgUrl = "https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp,q_100/v1714438444/nwga31jhgwhhww5a4xcf.png"

const ProfileSection = () => {
    return (
        <div className="profile__content">
            <CircularImage src={imgUrl} alt='some__pic' size={60} />
            <div className='text'>
                <h2>Frontent Developer</h2>
                <h4>React JS & React Native</h4>
                <p>Semi Senior</p>
            </div>

            <style jsx>{`
                .profile__content{
                    width: 1200px;
                    display: flex;
                    gap: 1em;
                }
            `} </style>

        </div>
    )
}

export default ProfileSection