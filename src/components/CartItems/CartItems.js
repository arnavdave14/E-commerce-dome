import styled from 'styled-components'
import './CartItems.css'
import { Link } from 'react-router-dom';



export const CartItemsBody = styled.div`

            margin: 100px 170px;
            color: var(--black);

`

export const CartItemsformatmain = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 35px;
    padding: 20px 0;
    color: #454545;
    font-size: 18px;
    font-weight: 600;
`;

export const CartItemsformatmainhr = styled.div`
    border: 2px solid #e2e2e2;
    width: 100%;
`
export const CartItemsformatmianbody = styled.div`



`
export const  CartItemsformat = styled.div `
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 35px;
    padding: 20px 0;
    color: #454545;
    font-size: 18px;
    font-weight: 600;


    p{
        font-size: 15px;
        font-weight: 500;
    }

`
export const  CartProducticon = styled.img `

        height:70px;

`
export const  CartItemsQuantiybtn = styled.div `
        border: 1px solid #e5e5e5;
        width: fit-content;
        padding: 10px 20px; 

`
export const  CartItemsremoveimg = styled.img `

        width: 15px;
        margin: 0px 35px;
        cursor: pointer;
`
export const CartItemsPromobody = styled.div`
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding:10px 0px;
            margin-top: 100px;
`


export const CartItemsDown = styled.div`
        display: flex;
        flex-direction: column;
`
export const CartItemstotal = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding-right: 350px;
        text-align: left;


        h1{
            margin: 0;
            font-size: 2rem;
        }

`
export const Cartitemstotalitems = styled.div`
        display: flex;
        justify-content: space-between;
`
export const CartItemsDownbtn = styled(Link)`
        width: 250px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        background-color: #ff5a5a;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
`
export const CartItemsPromocode = styled.div`
        font-size: 16px;
        font-weight: 500;
        p{
            color: #555;
        }
`
export const CartItemsPromobox = styled.div`
        margin-top: 15px;
        height: 58px;

        input{
            outline: none;
            border: none;
            font-size: 16px;
            background-color: #e5e5e5;
            font-weight: 500;
            color: var(--black);
            width:330px;
            height: 42px;
        }

        ::placeholder{
            padding-left: 15px;
        }
`

export const CartItemsPromobtn = styled.button`
        width: 100px;
        height: 44px;
        color: var(--white);
        background-color: var(--black);
        font-size: 16px;
        font-weight: 500;
        border: none;
        outline: none;
        border-radius: 0;
        cursor: pointer;
`