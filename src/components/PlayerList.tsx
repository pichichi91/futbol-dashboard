import styled from "styled-components"
import { ItemGrid } from "."
import {useEffect, useState} from "react"
import {client} from "../lib/graphql/client"
import {allPlayers} from "../lib/graphql/queries"
import { Loader } from "./Loader";

const PlayerList = () => {

    const [profiles, setProfiles] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);


    useEffect(() => {

        client.query({query: allPlayers}).then((result: any) => {
            if(result.data.allProfile ){
                const {allProfile} =  result.data;
                const results = allProfile.map((item: any) => {
                    const name = item.name
                    const url = "players/" + item.slug.current
                    const image = item.image.asset.url
                    return { name, url, image}
                })
                setProfiles(results)
                setHasLoaded(true)

            }
        });
    }, [])

    if(!hasLoaded) return <Loader />


    return (
        <Box>
            <Title>Top Players</Title>
            <ItemGrid items={profiles} Image={Image} />
        </Box>
    );
}

const Box = styled.div`

    @media screen and (max-width: 600px) {
    overflow-y: scroll;
    max-height: calc(100vh - 95px );
    }
    ::-webkit-scrollbar {
        width: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #1271ed;
    }



`

const Title = styled.h1`
font-weight: 900;
font-size: 3rem;
line-height: 1;

`

const Image = styled.img`
width: 150px;
height: 150px;
object-fit: cover;
border-radius: 100%;

`



export { PlayerList };