import styled from "styled-components"
import { ItemGrid } from "."



const PlayerList = () => {
    const player_data = [
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },
        { url: "/players/lionelmessi", name: "Lionel Messi", imageURL: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSI96HKaXYUWoO1xZGNVx8oFd2mTETOcDsNZ8LWowgmRezLiNYKVjsRXJ05RCAV" },


    ]
    return (
        <Box>
            <Title>Top Players</Title>
            <ItemGrid items={player_data} Image={Image} />
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