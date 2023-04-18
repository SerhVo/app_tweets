import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button, Title, Card_div, CardWrapper, Avatar, Info_div, Bg_img, Line, Logo, LogoCont } from './Card.styled';
import hanselImg from '../images/Boy.png';
import picImg from '../images/picture2.png';
import logo from '../images/Vector.png';
import  API_ENDPOINT  from './UserList';

function Card({user, id}) {
    const [following, setFollowing] = useState(false);
    const [followers, setFollowers] = useState(0);
    const prevFollowersRef = useRef();

    
    useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(`user_${id}`));
    if (userData) {
        setFollowing(userData.following);
        setFollowers(userData.followers);
    }
}, [id]);

const handleFollowClick = () => {
const newFollowing = !following;


const newUserData = { following: newFollowing, followers };
localStorage.setItem(`user_${id}`, JSON.stringify(newUserData));


fetch("https://643ea57d6c30feced82f20cf.mockapi.io/users/:`${id}`", {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newUserData)
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
    throw new Error('Network response was not ok.');
})
.then(data => {
    console.log('Updated user:', data);
})
.catch(error => {
    console.error('Error updating user:', error);
});



setFollowing(newFollowing);
setFollowers(prevFollowersRef.current + (newFollowing ? 1 : -1));

};

    return (
        <CardWrapper>
            <Card_div key={id}>
                <LogoCont>
                    <Logo src={logo} alt="logo" />
                </LogoCont>

                <Bg_img src={picImg} alt="picture" />
                <Info_div >
                    <Avatar src={user.avatar} alt="User Avatar" />
                    <Line></Line>
                    <Title> {user.tweets} tweets</Title>
                    <Title>{user.followers.toLocaleString()} Followers</Title>
                    <Button style={{
                        backgroundColor: following ? '#5CD3A8' : '#EBD8FF'
                    }} onClick={handleFollowClick}>
                        {following ? 'Following' : 'Follow'}
                    </Button>
                </Info_div>
            </Card_div>
        </CardWrapper>
    );
}

export default Card;
