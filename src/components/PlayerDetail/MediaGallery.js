import styled from "styled-components"
import { SRLWrapper } from "simple-react-lightbox";

const MediaGallery = ({ media }) => (

    <Box>
        <SubTitle>Fotos & Videos</SubTitle>
        <SRLWrapper>

            <MediaGrid>

                {media.map((content) => (
                    <img src={content} alt="player gallery" />
                ))}

            </MediaGrid>
        </SRLWrapper>


    </Box>
)


const Box = styled.div`
display: flex;
justify-content: start;
margin-top: 3em;
flex-direction: column;
`


const MediaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 40px;
    row-gap: 100px;
    margin-top: 50px;

    >img {
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        :hover {
            transform: translateY(-7px);
        }
    }
`

const SubTitle = styled.h2`
font-size: 2em;
font-weight: 900;

`

export { MediaGallery };