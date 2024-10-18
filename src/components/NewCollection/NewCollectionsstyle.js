import styled from 'styled-components'
import './NewCollections.css'
import { Link } from 'react-router-dom'


export const NewCollectionsbody = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 100px;
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
export const Collections = styled.div`
        margin-top: 50px;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
`