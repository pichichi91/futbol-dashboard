import { useParams } from "react-router-dom";
import styled from "styled-components"
import { GameCountDown } from "./GameCountdown";
import { MediaGallery } from "./MediaGallery";
import {ClubListing} from "./ClubListing"
import { UrlBox } from "./UrlBox";
import { NewsBox } from "./NewsBox";
import { Header } from "./Header";


interface IClubInfo {
    url: string,
    imageURL: string;
}
interface IProfileData {
    linkText: string;
    linkUrl: string;
    url: string;
    name: string;
    imageURL: string;
    teams: Array<IClubInfo>
 }

 interface ParamTypes {
    id: string
  }

const apiData: { [id: string] : IProfileData; } =  {};


apiData["lionelmessi"] = { 
    linkText: "messi.com", 
    linkUrl: "//messi.com",  
    url: "/players/lionelmessi", 
    name: "Lionel Messi", 
    imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV", 
    teams: [{ url: "/clubs/argentina", imageURL: "https://upload.wikimedia.org/wikipedia/de/thumb/0/00/Asociaci%C3%B3n-del-F%C3%BAtbol-Argentino-Logo.svg/1280px-Asociaci%C3%B3n-del-F%C3%BAtbol-Argentino-Logo.svg.png" },{ url: "/clubs/fcbarcelona", imageURL: "https://lh3.googleusercontent.com/OQZi4ckWAs7UrOlZEPefXZgJOcdJuSM5FSH9zqD5rMg6c2MOaxcKpV5IMrb1Tju98fWyNmcI33E4RGb0uC09Ej4W" }]
 
}

const media = ["https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg",  "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg"]


const PlayerDetail = () => {
    const { id } = useParams<ParamTypes>();
    const player = apiData[id];

    if (!player) return <>Sorry, this Player doesn't exist</>


    const teams = player.teams;
    return (
        <Box>

            <Header player={player} />
            <ClubListing teams={teams} />

            <UrlBox player={player} />
            <GameCountDown player={player} />
            <MediaGallery media={media} />

            <NewsBox />

           
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

export { PlayerDetail }