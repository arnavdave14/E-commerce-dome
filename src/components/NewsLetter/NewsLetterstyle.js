import styled from 'styled-components'
import './NewsLetter.css'


export const NewsLetterbody = styled.div`
            width:73%;
            height:auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            padding: 0px 140px;
            margin-bottom: 150px;
            gap: 30px;
            background: linear-gradient(180deg, #fde1ff , #e1ffea22 60%);

            h1{
                color: #454545;
                font-size: 55px;
                font-weight: 600;
            }

            p{
                color: #454545;
                font-size: 20px;
            }

            
`
export const NewsLetterForm = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--white);
            width:730px;
            height: 70px;
            border-radius:80px;
            border: 1px solid  #e3e3e3;

            input{
                width: 500px;
                margin-left: 30px;
                border: none;
                outline: none;
                color: #616161;
                font-size: 16px;
                background: var(--white);
            }
`


export const NewsLetterbtn = styled.button`
                width: 210px;
                height: 70px;
                border-radius:80px;
                background: black;
                color: var(--white);
                font-size: 16px;
                cursor: pointer;
`