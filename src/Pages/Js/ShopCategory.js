import styled from 'styled-components'
import '../Css/ShopCategory.css'
import { Link } from 'react-router-dom'

export const ShopCategorybody = styled.div`

`

export const ShopCategoryimg = styled.img`
        width: 90%;
        display: block;
        margin: 30px auto;

`
export const ShopCategoryindexshort = styled.div`
            color: var(--black);
            display: flex;
            margin: 0px 60px;
            justify-content: space-between;
            align-items: center;

            p,span{
                font-weight: 600;
            }

`

export const ShopCategoryshort = styled.div`
            color: var(--black);
            padding:10px 20px;
            border-radius:40px;
            border: 1px solid #888;
`

export const ShopCategoryshortimg = styled.img`

`
export const ShopCategoryproduct = styled.div`
            display: flex;
            margin-top: 30px;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

`