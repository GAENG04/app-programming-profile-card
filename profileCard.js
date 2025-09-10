import React, { useState } from 'react';

function ProfileCard(props) {
    const { name, studentId, major } = props;
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    return (
        <div className='profile-card'>
            <h2>{name}</h2>
            <p>학번: {studentId}</p>
            <p>전공: {major}</p>
            <button onClick={handleLike}>좋아요 {likeCount}</button>
        </div>
    );
}

export default ProfileCard;
