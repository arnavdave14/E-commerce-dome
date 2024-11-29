import { Link } from "react-router-dom";
import styled from "styled-components";

export const Loginsignupbody = styled.div`
                width: 100%;
                height: 90vh;
                background: #fce3fe;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 30px;
                /* color: black; */

`
export const LoginsignupContainer = styled.div`
                width:590px;
                height: 500px;
                background: white;
                margin: auto;
                padding: 40px 60px;

                h1{
                    margin: 20px 0px;
                    text-align: center;
                    color: black;
                }
`
export const LoginsignupContainerspan = styled.span`
    color: #ff4141;
`

export const LoginsignupField = styled.div`
                display: flex;
                flex-direction:column ;
                gap: 30px;
                margin-top: 30px;
                border-radius: 10px;

                input{
                    width: 100%;
                    height: 50px;
                    padding-left: 20px; 
                    border: 1px solid #c9c9c9;
                    border-radius:5px;
                    background-color:white ;
                    outline: none;
                    color: black;
                    font-size:18px;

                    :checked{
                        background: white;
                    }


                }

`

export const LoginsignupBtn = styled.button`
                    width: 615px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 60px;
                    border-radius: 5px;
                    color: white;
                    background: #ff4141;
                    margin-top: 30px;
                    border: none;
                    font-size: 24px;
                    font-family: 500;
                    cursor: pointer;

`

export const LoginsignupLogin = styled.div`

                    margin-top: 20px;
                    color: #5c5c5c;
                    font-size: 18px;
                    font-weight: 500;

                    span{
                        
                    }
`

export const Loginsignupspan = styled(Link)`
                        color:#FF4141;
                        text-decoration: underline;
                        font-family: 600;
`


export const LoginsignupAgree = styled.div`
                display:flex;
                align-items: center;
                gap: 20px;
                color:#5c5c5c;
                font-size: 18px;
                font-weight: 500;
                color: #5c5c5c;

`


