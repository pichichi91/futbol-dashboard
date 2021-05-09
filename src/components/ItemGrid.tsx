

import styled from "styled-components"
import { NavLink } from "react-router-dom";
interface IGridItem {

    url: string,
    name: string,
    image : string


}

interface Props  {

    items: Array<IGridItem>,
    Image: any,

}

const Grid = ({ items, Image }: Props) => {


    

    return (<ItemGrid>
        { items.map((item) => (
            <Item key={item.name}>
                <div>
                    <NavLink to={item.url}>
                        <Image src={item.image} />
                    </NavLink>

                </div>
                <NavLink to={item.url}>

                    <Name>{item.name}</Name>
                </NavLink>
            </Item>
        ))}
    </ItemGrid>

)}

const Name = styled.div`
margin-top: 1em;
font-weight: bold;
font-size: 1.2em
`



const Item = styled.div`
display: flex;
 margin-right: 3em;
 @media screen and (max-width: 600px) {
    margin-right: 1.5em;

 }
margin-top: 4em;
flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.2s ease-in-out;

:hover {
    transform: translateY(-7px);
}
`

const ItemGrid = styled.div`
display: flex;
justify-content: flex-start;

@media screen and (max-width: 600px) {
    justify-content: center;

}
flex-wrap: wrap;
    margin-top: 3em;
`

export { Grid };