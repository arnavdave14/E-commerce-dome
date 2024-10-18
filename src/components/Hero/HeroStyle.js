import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeroBody = styled.div`
            width:100%;
            display: flex;
            flex-direction: row;
            height:100vh;
            background: linear-gradient(180deg, #fde1ff , #e1ffea22 60%);
            color: var(--black);
` 
export const HeroBodyLeft = styled.div`
            width:48.9%;
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            padding-left: 180px;
            line-height: 1.1;
        

            h2{
                color: #090909;
                font-size: 26px;
                font-weight: 600;
                margin: 0;
            }

            p{
                color: #171717;
                font-size: 60px;
                margin: 0;
                font-weight: 600;
            }
`



export const HeroBodyRight = styled.div`
            width:48.9%;
            display: flex;
            justify-content:center;
            align-items: center;
`

export const Handicon = styled.div`
            display: flex;
            align-items: center;

`

export const HeroLatestbtn = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        width:310px;
        height: 70px;
        gap: 15px;
        color: var(--white);
        margin-top: 35px;
        background: #ff4141;
        color: white;
        border-radius: 75px;
        cursor: pointer;
        

        p{
            font-size: 25px;
            font-weight: 400;
            color: var(--white);
        }
`

export const HeroImage = styled.img`
        width: fit-content;
        height:700px;

`;