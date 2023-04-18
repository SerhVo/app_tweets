import styled from 'styled-components';


export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
background: linear-gradient(114.99deg, #dfe61e -0.99%, #baf5e8 54.28%, #b095f0 78.99%);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CardItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  
  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 20px);
  }
  
  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 24px;
text-transform: uppercase;
color: #1e32e6;
text-align: center;
  text-shadow: 0px 0px 3px black;


`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white; 
  z-index: 1000; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center; 
`;

export const Footer = styled.div`
  
display: flex;
    justify-content: center;
  background-color: #6a52f7; 
  z-index: 1000; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
   
`;

export const ButtonMo = styled.button`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
  
  width: 196px;
    height: 50px;
    margin: 10px;
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