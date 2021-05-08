import {useEffect, useState} from "react"


import { useParams } from "react-router-dom";
import styled from "styled-components"
import { MediaGallery } from "./MediaGallery";
import {ClubListing} from "./ClubListing"
import { UrlBox } from "./UrlBox";
import { NewsBox } from "./NewsBox";
import { Header } from "./Header";
import {NextGame} from "./NextGame";
import {client} from "../../lib/graphql/client"
import {playerDetail} from "../../lib/graphql/queries"




 interface ParamTypes {
    id: string
  }









const media = ["https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg",  "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-29.jpg", "https://messi.com/wp-content/uploads/2021/04/2021-04-05-ENTRENO-11.jpg", "https://messi.com/wp-content/uploads/2021/03/2021-03-21-R.-SOCIEDAD-BARCELONA-16.jpg"]


const PlayerDetail = () => {
    const { id } = useParams<ParamTypes>();

    const [profile, setProfile] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);


    useEffect(() => {

        client.query({
            query: playerDetail,
            variables: {
            slug: id
            }
        }).then((result: any) => {
            console.log(result)

            if(result.data.allProfile ){
                console.log(result)
                const {allProfile} =  result.data;

                const profileResult = allProfile.map((item: any) => {
                    const name = item.name
                    const url = "clubs/" + item.slug.current
                    const image = item.image.asset.url

                    const linkUrl = item.WebsiteURL
                    const linkText = item.Website 
                    return { name, url, image, linkUrl, linkText}
                })
                setProfile(profileResult)
                setHasLoaded(true)
            }
        });
    }, [id])



    const player:any = profile[0];

    if(!hasLoaded) return <>Loading...</>
    if (!player) return <>Sorry, this Player doesn't exist</>


    const teams = player.team;
    return (
        <Box>

            <Header player={player} />
            <ClubListing teams={teams} />

            <UrlBox player={player} />
            <NextGame player={player} />
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
padding-left: 1em;

    }
    ::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-thumb {
  background-color: #1271ed;
}



`

export { PlayerDetail }