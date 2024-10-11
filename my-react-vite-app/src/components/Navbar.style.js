import styled from 'styled-components'

export const StyledAlink = styled.a` 
background-color: transparent;
display: flex;
align-items: center;
color: black;
font-weight: 400;
border-radius:10px;
border:none;
outline: none;


&:hover{
    background-color: transparent;
    color: #fd7f00;
    font-weight: 400;
    border-radius:10px;
    transition: ease-in 0.5s;
    border:none;
    outline: none;
    text-decoration: none;
}
`



export const StyledButton = styled.button`
    border:1px solid black;
    background-color: white;
    color: black;
    font-weight: 400;
    border-radius:10px;


&:hover{
    border:1px solid white;
    background-color: black;
    color: white;
    font-weight: 400;
    border-radius:10px;
    transition: ease-in 0.5s;

    

&:focus{
    border:2px solid pink;
    background-color: #006eff;
    color: #00d05a;
    font-weight: 400;
    border-radius:15px;
}
}
`