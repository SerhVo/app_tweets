import React from 'react';

import styled from 'styled-components';


export const Card_div = styled.div`
width: 380px;
height: 460px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
 position: absolute;
`;

export const CardWrapper = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

export const Info_div = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Bg_img = styled.img`   

  background-size: cover;
  background-position: center top;
  margin: 28px 36px 0;
  
  `;

export const Avatar = styled.img`  
  width: 62px;
height: 62px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
z-index: 10;
border: 8px solid #EBD8FF;  
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`;

export const Line = styled.img`  
    width: 380px;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
      margin-top: -40px;
    margin-bottom: 36px;
`;

export const Logo = styled.img`
width: 76px;
  height: 22px;
`;

export const LogoCont = styled.div`  
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
  `;

export const Title = styled.h2`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;

`;

export const Button = styled.button`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
  
  width: 196px;
    height: 50px;
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;


box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
&:hover {
    scale: 1.1;
    background-color: #bddbf0;
  }

  &:focus {
    outline: none;
  }
`;