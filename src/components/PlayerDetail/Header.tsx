import { HiBadgeCheck } from "react-icons/hi"
import styled from "styled-components"
interface IPlayer {
    name: string,
    image: string;
}
interface Props {
    player: IPlayer;
}
const Header = ({player}: Props) => (
    <>
        <Flex>
            <Image src={player.image} />
        </Flex>
        <Flex>
            <Name>
                {player.name} <HiBadgeCheck /> 
            </Name> 
        </Flex>
    </>
)

const Image = styled.img`
    object-fit: cover;
    border-radius: 100%;
    width: 300px;
    height: 300px;
    box-shadow: 1px 1px 20px rgb(0 0 0 / 62%);
    margin-top: 1em;
`


const Name = styled.h1`
font-weight: 900;
font-size: 4em;
margin-top: 0.5em;
margin-bottom: 0.5em;
text-align: center;

svg {
    display: inline;
    color: #1271ed;
    font-size: 0.75em
}

`

const Flex = styled.div`
display: flex;
justify-content: center;
}

`


export {Header};