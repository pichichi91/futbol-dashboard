

import styled from "styled-components"
import { NavLink } from "react-router-dom";

interface IGridItem {

    url: string,
    name: string,
    imageURL : string


}

interface Props  {

    items: Array<IGridItem>,
    Image: any;

}

const Grid = ({ items, Image }: Props) => (


    <ItemGrid>
        {items.map((item) => (
            <Item>
                <div>
                    <NavLink to={item.url}>
                        <Image src={item.imageURL} />
                    </NavLink>

                </div>
                <NavLink to={item.url}>

                    <Name>{item.name}</Name>
                </NavLink>
            </Item>
        ))}
    </ItemGrid>

)

const Name = styled.div`
margin-top: 1em;
font-weight: bold;
font-size: 1.2em
`



const Item = styled.div`
display: flex;
flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.2s ease-in-out;

:hover {
    transform: translateY(-7px);
}
`

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 40px;
    row-gap: 120px;
    margin-top: 50px;
`

export { Grid };