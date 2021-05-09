import styled from "styled-components"
import {useEffect, useState} from "react"
import {client} from "../lib/graphql/client"
import {allTeams} from "../lib/graphql/queries"
import { Loader } from "./Loader";
import { ItemGrid } from "."

const ClubList = () => {
    const [clubs, setClubs] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {

        client.query({query: allTeams}).then((result: any) => {
            if(result.data.allTeam ){
                const {allTeam} =  result.data;
                const results = allTeam.map((item: any) => {
                    const name = item.name
                    const url = "clubs/" + item.slug.current
                    const image = item.image.asset.url
                    return { name, url, image}
                })
                setClubs(results)
                setHasLoaded(true)
            }
        });
    }, [])

    if(!hasLoaded) return <Loader />
    return (
        <Box>
            <Title>Top Clubs</Title>
            <ItemGrid items={clubs} Image={Image} />
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
width: 200px;
height: 200px;
object-fit: scale-down;

`



export { ClubList };