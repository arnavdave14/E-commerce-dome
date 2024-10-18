import styled from 'styled-components'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footerbody = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;

`

export const Footerlogo = styled.div`
            display: flex;
            align-items: center;
            gap: 20px;
            color: #383838;

            span{
                color: #383838;
                font-size: 36px;
                font-weight: 700;
            }
`

export const FooterLinkbody = styled.div`
                display: flex;
                list-style: none;
                gap: 30px;
                font-size: 20px;

`

export const FooterLinks = styled(Link)`
                cursor: pointer;
                text-decoration: none;
                color: #252525;
`
export const FooterSocialicon = styled.div`
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
`

export const FooterSocialiconlink = styled(Link)`
                padding: 10px;
                padding-bottom: 6px;
                background: #fbfbfb;
                border: 1px solid #ebebeb;
                border-radius:50px;
`

export const Footercopyright = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            width: 100%;
            margin-bottom: 30px;


            hr{
                width: 80%;
                border: 1px solid #c7c7c7;  
                border-radius: 10px;
            }
`
export const Footerpara = styled(Link)`
            color: #1a1a1a;
            text-decoration: none;
            font-size: 20px;

`