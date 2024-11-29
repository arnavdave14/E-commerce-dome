import { Link } from "react-router-dom";
import styled from "styled-components";

export const DescriptionBoxbody = styled.div`
                color: black;
                display: flex;
                flex-direction: column;
                width: 73%;
                margin: 20px 158px;
                color: black;

`

export const DescriptionBoxNavi = styled.div`
                display: flex;
`
export const DescriptionBoxNavibox = styled.div`
                display: flex;
                justify-content: center;
                font-size: 16px;
                font-weight: 600;
                padding: 10px;
                width: 160px;
                height:auto;
                margin: 0;
                border: 1px solid #D0D0D0;

                &:nth-child(2) {
                    background: #fbfbfb;
                    color:#555;
                    text-align: center;
                }
` 

export const DescriptionBoxNaviboxdescription = styled.div`
                display: flex;
                flex-direction: column;
                gap: 25px;
                border: 1px solid #D0D0D0;
                padding: 30px;
                padding-bottom: 70px;

`