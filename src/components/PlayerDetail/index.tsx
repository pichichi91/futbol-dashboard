import { useParams } from "react-router-dom";
import styled from "styled-components"
import { HiBadgeCheck } from "react-icons/hi"
import { BiLinkExternal } from "react-icons/bi"
import { CountDownWrapper } from "./NextGameCountdown";
import { MediaGallery } from "./MediaGallery";

interface IProfileData {
    linkText: string;
    linkUrl: string;
    url: string;
    name: string;
    imageURL: string;
 }

 interface ParamTypes {
    id: string
  }

const apiData: { [id: string] : IProfileData; } =  {};


apiData["lionelmessi"] = { linkText: "messi.com", linkUrl: "//messi.com",  url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV", 
}

const media = ["https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg",  "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg"]


const PlayerDetail = () => {
    const { id } = useParams<ParamTypes>();
    const player = apiData[id];

    if (!player) return <>Sorry, this Player doesn't exist</>

    return (
        <Box>

            <Row><Image src={player.imageURL}></Image></Row>
            <Row>
            <Name>
            {player.name} <HiBadgeCheck /> </Name> 
            </Row>

            <Row>
            <BiLinkExternal style={{ fontSize: "2em", marginLeft: "0.25em", paddingTop: "8px"}} /> 
            <ExternalLink href={player.linkUrl}>{player.linkText} </ExternalLink> 
            </Row>
            <Row>
               
            </Row>
            <CountDownWrapper player={player} />
            <MediaGallery media={media} />

            <ContentRow>
                <SubTitle>News</SubTitle>
            </ContentRow>

           
        </Box>
    )

}


const Box = styled.div`

    @media screen and (max-width: 600px) {
    overflow-y: scroll;
    max-height: 85vh;

padding-right: 1em;
    }
    ::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-thumb {
  background-color: #1271ed;
}



`



const SubTitle = styled.h2`
font-size: 2em;
font-weight: 900;

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

const Row = styled.div`
display: flex;
justify-content: center;
}

`

const ContentRow = styled.div`
display: flex;
justify-content: start;
margin-top: 3em;
flex-direction: column;
}

`

const Image = styled.img`
    object-fit: cover;
    border-radius: 100%;
    width: 300px;
    height: 300px;
    box-shadow: 1px 1px 20px rgb(0 0 0 / 62%);
    margin-top: 1em;
`
export { PlayerDetail }