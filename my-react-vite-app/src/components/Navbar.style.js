import { Link } from 'react-router-dom';
import styled from 'styled-components'
import "./Navbar.css" 



export const Lilinks = styled(Link)`
        color:var(--white);
        cursor: pointer;
        display: flex;
        padding: 10px ;
        color: var(--black);
        flex-direction: column;

&:hover{
    color: red;
    transition: ease-in 0.3s;
}
`



export const Navbody = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    height:80px;
    justify-content: space-around;
    border-bottom: 1px solid gray;
`
export const Logo = styled.a`
        text-decoration: none;
        color:white;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: var(--black);



        &:hover{
        color: var(--black);
}
`

export const Ulbody = styled.div`
            display: flex;
            align-items: center;

`

export const NavBtnSec = styled.div`
        display: flex;
        align-items: center;

`
export const LogBtn =  styled.button`
            border: 1px solid var(--black);
            background-color: var(--white);
            color: var(--black);
            padding:10px 20px;
            border-radius:5px;
            
            
            &:hover{
            border: 1px solid var(--white);
            background-color:var(--black);
            color: var(--white);
            transition: ease-in-out 0.3s;
            } 
`
export const CartBtn = styled.a`
                padding-left: 20px;
                display: flex;
                align-items: center;
                cursor: pointer;
                color: var(--lightblack);

&:hover {

        color:var(--black);
        transition: ease-in-out 0.3s;
}
`;