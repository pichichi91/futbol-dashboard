import { NavLink } from "react-router-dom";
import styled from "styled-components"

interface Props {
    club: IClubInfo
}
interface IClubInfo {
    url: string,
    image: string;
}

const ClubListing = ({club}: Props) => {
    if(!club) return(<></>)


    return(
        <Row>
            <Clublist>
                
                    <NavLink key={club.url} to={club.url}>
                        <ClubImage src={club.image} />
                    </NavLink>

             
            </Clublist>
        </Row>
     )
    }


const Row = styled.div`
display: flex;
justify-content: center;
}

`
const Clublist = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2em;

width: 300px;

img {
    width: 110px;
    height: 110px;
}

`

const ClubImage = styled.img`
object-fit: scale-down;
    margin-top: 1em;
    transition: all 0.2s ease-in-out;
    padding: 1em;
    background-color: #1271ed17;
    border-radius: 10px;
    :hover {
        transform: translateY(-7px);
    }
`


export {ClubListing}