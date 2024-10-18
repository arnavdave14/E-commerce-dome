import { Link } from "react-router-dom";
import styled from "styled-components";



export const Offerss = styled.div`
        width: 73%;
        height: auto;
        display: flex;
        margin: auto;
        padding: 0px 140px;
        margin-bottom: 150px;
        background: linear-gradient(180deg, #fde1ff , #e1ffea22 60%);
        color: var(--black);
`
export const Offersleft = styled.div`
        flex: 1;        
        display: flex;
        flex-direction: column;
        justify-content: center;


        h1{
                color:#171717;
                font-size:60px;
                font-weight: 600;
                margin: 10px 0px;
        }

        p{
                color:#171717;
                font-size:22px;
                font-weight: 600;
        }

`

export const Offersright = styled.div`
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding-top: 50px;




`

export const OffersBtn = styled.button`
                width: 282px;
                height: 70px;
                border-radius: 35px;
                background: #ff4141;
                border: none;
                color: var(--white);
                font-size: 22px;
                font-weight: 500;
                margin-top: 30px;
                cursor: pointer;
`

export const Offersimg = styled.img`

`
