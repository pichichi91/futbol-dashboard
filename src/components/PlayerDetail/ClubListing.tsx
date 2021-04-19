import { NavLink } from "react-router-dom";
import styled from "styled-components"

interface Props {
    teams: Array<IClubInfo>
}
interface IClubInfo {
    url: string,
    imageURL: string;
}

const ClubListing = ({teams}: Props) => {
    if(!teams) return(<></>)

    return(
        <Row>
            <Clublist>
                {teams.map((team) => (
                    <NavLink key={team.url} to={team.url}>
                        <ClubImage src={team.imageURL} />
                    </NavLink>
                ))}
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
justify-content: space-around;
margin-bottom: 2em;
img {
    width: 100px;
    height: 100px;
}
img:first-of-type {
    margin-right: 2em;
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