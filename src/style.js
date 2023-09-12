import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;

export const H1 = styled.h1`
  text-align: center;
`;

export const Corpo = styled.div`
background-color: white;
width: 100%;
height: 100%;
border-radius: 5px;
padding: 20px;
`;


export const Input = styled.input`
width: 400px;
height: 30px;
margin-right: 15px;
border-radius: 5px;

`;

export const Button = styled.button`
height: 35px;
background-color: #243757;
border-radius: 5px;
border: none;
font-weight: bold;
color: white;


&:hover{
    cursor: pointer;
    opacity: 0.7;
}
`;

export const Ul = styled.ul`
border-radius: 5px;
padding: 0;
margin: 0;
margin-top: 20px;


`;

export const Button2 = styled.button`
background-color: #d83018;
color: white;
display: flex;
border: none;


&:hover{
    cursor: pointer;
    opacity: 0.7;
}
`;

export const Item = styled.li `
background-color: #bce3c5;
width: 95%;
height: 100%;
padding-left: 15px;
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
margin-bottom: 10px;
padding: 15px;
font-weight: 200;


`;