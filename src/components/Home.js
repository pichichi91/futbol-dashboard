import styled from "styled-components"

const Home = () => (

    <Flex>

        <Container>
            <Image src="https://gloria.app/images/60270b98347779b9bc4deb07_gloria-logo-site.png" />
            <Subtitle>
                The new platform for all football lovers. Now in beta on iOS.

            </Subtitle>
            <Description>
                Chat about your favorite players and teams. Watch awesome videos. Show your skills and share your passion for the game. <strong>All in one place.</strong>


            </Description>
            <ButtonBox>
                <Button>Get Access via TestFlight</Button>
            </ButtonBox>
        </Container>
    </Flex>
)


const ButtonBox = styled.div`
display: flex;
justify-content: center;
margin-top: 3em;
`

const Button = styled.button`
border-radius: 20px;
border: 1px solid transparent;
padding: 1em 2em;
margin-top: 1em;
background: #1271ed;
font-weight: 700;

color: white;
box-shadow: 0 0px 12px rgb(0 0 0 / 20%);
:hover {
    background: white;
color: #1271ed;
border-color: #1271ed;
}

@media screen and (max-width: 800px) {
margin-bottom: 1em;
}


`

const Image = styled.img`
    align-self: center;
    @media screen and (max-width: 800px) {
        margin-top: 1em;
    }


`
const Description = styled.div`

    margin-top: 4em;
    padding:1.5em;
    border-radius: 10px;
    border: 1px solid #1271ed;
    color: black;
    font-size: 1.2em;
    text-align: center;
    color: #1271ed;
    font-weight: 400;
    box-shadow: 0 0px 20px rgb(18 113 237 / 30%);
    `

const Subtitle = styled.h2`
font-size: 2.5em;
font-weight: 900;
text-align: center;
color: #1271ed;
@media screen and (max-width: 800px) {
    font-size: 2em;
    margin-top: 1em;
}
`


const Container = styled.div`
width: 800px;
display: flex;
flex-direction: column;
@media screen and (max-width: 800px) {
width: 80%
}
`

const Flex = styled.div` 
display: flex;
justify-content: center;
@media screen and (max-width: 800px) {
    overflow-y: scroll;
    max-height: calc(100vh - 95px );
    margin-bottom: 1em
    }
    ::-webkit-scrollbar {
        width: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #1271ed;
    }
`

export { Home };