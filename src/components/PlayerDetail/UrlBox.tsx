import { BiLinkExternal } from "react-icons/bi"
import styled from "styled-components"


interface IPlayer {
    linkUrl: string,
    linkText: string; 
}

interface Props {
    player: IPlayer

}


const UrlBox = ({player}: Props) => (
    <Flex>
        <BiLinkExternal style={{ fontSize: "2em", marginLeft: "0.25em", marginRight: "0.5em", paddingTop: "8px"}} /> 
        <ExternalLink href={player.linkUrl}>{player.linkText} </ExternalLink> 
    </Flex>
)

const Flex = styled.div`
display: flex;
justify-content: center;
}

`


const ExternalLink = styled.a`
color: #1271ed;
font-size: 1.5em;
border-bottom: 4px solid #1271ed;
line-height: 1.3em;
transition: all 0.2s ease-in-out;


:hover{
    color: black;
    border-color: black
}
`

export {UrlBox};