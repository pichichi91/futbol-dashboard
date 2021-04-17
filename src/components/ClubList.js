import styled from "styled-components"
import { ItemGrid } from "../components"



const ClubList = () => {
    const club_data = [

        { url: "/clubs/fcbarcelona", name: "Barcelona", imageURL: "https://lh3.googleusercontent.com/OQZi4ckWAs7UrOlZEPefXZgJOcdJuSM5FSH9zqD5rMg6c2MOaxcKpV5IMrb1Tju98fWyNmcI33E4RGb0uC09Ej4W" },
        { url: "/clubs/mancity", name: "Manchester City", imageURL: "https://upload.wikimedia.org/wikipedia/de/thumb/0/09/Wappen_Manchester_City_2016.svg/1200px-Wappen_Manchester_City_2016.svg.png" },
        { url: "/clubs/bocajuniors", name: "Boca Juniors", imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/1200px-Boca_Juniors_logo18.svg.png" },
        { url: "/clubs/arsenalfc", name: "Arsenal FC", imageURL: "https://upload.wikimedia.org/wikipedia/de/thumb/3/32/FC_Arsenal_%28seit_2002%29.svg/1200px-FC_Arsenal_%28seit_2002%29.svg.png" },
        { url: "/clubs/chelseafc", name: "Chelsea FC", imageURL: "https://upload.wikimedia.org/wikipedia/de/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png" },
        { url: "/clubs/intermiami", name: "Inter Miami", imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/1200px-Inter_Miami_CF_logo.svg.png" },



    ]
    return (
        <Box>
            <Title>Top Clubs</Title>
            <ItemGrid items={club_data} Image={Image} />
        </Box>
    );
}

const Box = styled.div`
    @media screen and (max-width: 600px) {
    margin-bottom: 100px;

`

const Title = styled.h1`
font-weight: 900;
font-size: 3rem;
line-height: 1;

`

const Image = styled.img`
width: 150px;
height: 150px;
object-fit: scale-down;

`


export { ClubList };