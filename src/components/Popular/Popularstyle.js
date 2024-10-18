import styled from 'styled-components'
import './Popular.css'
import { Link } from 'react-router-dom'

export const Poopular = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        height: auto;
        flex-direction: column;

        h1{
            color: #171717;
            font-size: 50px;
            font-weight: 500;
        }

        hr{
            width: 200px;
            border-radius: 10px;
            background: #252525;
            border: 5px solid black;
        }
`

export const Popularitems = styled.div`
        margin-top: 50px;
        display: flex;
        gap: 30px;

`

