"use client";

import { useState } from 'react';
import Link from 'next/link';

const UserInfo = () => {
    const [userName, setUserName] = useState('');
    const [profileData, setProfileData] = useState(null);

    const fetchUserData = async () => {
        if (!userName) return;
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            if (!response.ok) throw new Error('Error');
            const userData = await response.json();
            setProfileData(userData);
        } catch (error) {
            alert(error.message);
            setProfileData(null);
        }
        userName('')
    };

    return (
        <div className="container border border-black w-[600px] p-4 rounded-md mt-4 ml-4 ">
            <h1>GitHub User Qidiruv</h1>
            <div className="search-section">
                <input
                    className='outline-0 border border-black py-2 rounded-xl px-2 mr-4'
                    type="text"
                    placeholder="github user name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={fetchUserData} className='bg-black text-white p-2 rounded-xl hover:shadow-md'>search</button>
            </div>

            {profileData && (
                <div className="profile-card">
                    <img src={profileData.avatar_url} alt={`${profileData.login}'s avatar`} width={100} />
                    <h2>{profileData.login}</h2>
                    <p>{profileData.bio || 'No bio available'}</p>
                    <Link href={`/profile/${profileData.login}`} >
                        <a>View Full Profile</a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
