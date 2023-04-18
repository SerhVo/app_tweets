import React, { useState, useEffect } from 'react';
import { Button, Title, Card_div, CardWrapper, Avatar, Info_div, Bg_img, Line, Logo, LogoCont } from './Card.styled';
import hanselImg from '../images/Boy.png';
import picImg from '../images/picture2.png';
import logo from '../images/Vector.png';

function Card() {
    const [following, setFollowing] = useState(
        localStorage.getItem("following") === "true"
    );
    const [followers, setFollowers] = useState(
        parseInt(localStorage.getItem("followers")) || 100500
    );

    const handleFollowClick = () => {
        if (following) {
            setFollowing(false);
            setFollowers(followers - 1);
        } else {
            setFollowing(true);
            setFollowers(followers + 1);
        }
    };

    useEffect(() => {
        localStorage.setItem("following", following);
        localStorage.setItem("followers", followers);
    }, [following, followers]);
    return (
        <CardWrapper>
            <Card_div>
              <LogoCont>
                <Logo src={logo} alt="logo" />
            </LogoCont>
            
                <Bg_img src={picImg} alt="picture" />
                <Info_div >
                    <Avatar src={hanselImg} alt="User Avatar" />
                    <Line></Line>
                    <Title> 777 tweets</Title>
                    <Title>{followers.toLocaleString()} Followers</Title>
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
