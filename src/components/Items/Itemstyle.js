import styled from "styled-components";

export const Iitem = styled.div`
        width: 300px;
        overflow: hidden;
        margin-bottom:50px;


        &:hover{
            transform: scale(1.05);
            transition: 06.s;
        }


        p{
            margin: 6px 0px;
            color: var(--black);
        }



`

export const Itemimg = styled.img`


`
export const Itemprices = styled.div`
            display: flex;
            gap: 20px;
`

export const Itempricenew = styled.div`
            color: #374151;
            font-size: 18px;
            font-weight: 600;

`
export const Itempriceold = styled.div`
            color: #8c8c8c;
            font-size: 18px;
            font-weight: 500;
            text-decoration: line-through;

`
