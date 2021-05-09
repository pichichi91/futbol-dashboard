import styled from "styled-components"

const packages = [

    "@apollo",
    "graphql",
    "svg-loaders-react",
    "styled-components",
    "simple-react-lightbox",
    "react-router-dom",
    "react-icons",
    "react-countdown",
    "styled-components",
    "typescript"
]



const Home = () => {
    return(

    <Flex>

        <Container>
            <Subtitle>
                This is a <span>Create React App</span> - most data is stored on a backend on <span>sanity.io</span> and queried over GraphQL


            </Subtitle>
            <Info>
                In a first version the only goal is to display profiles of football <strong>players </strong> and <strong>clubs</strong>
               The following packages have been used for that:

    
            </Info>

            <PackageListing>
            <ul>
                   {packages.map((usedPackage:string) => <li key={usedPackage}>{usedPackage}</li>) }
               </ul>
               </PackageListing>



        </Container>
    </Flex>
)}




const PackageListing = styled.div`
display:flex;
justify-content: space-around;
ul {
    margin: 2em;
    padding: 3em;
    border-radius: 10px;
    background-color: gray;
    background-color: #f1f1f1;
    padding-right: 5em;
    padding-left: 5em;


}

li {
    list-style: none;
}
`


const Info = styled.div`
text-align: center;

`

const Subtitle = styled.h2`
font-size: 2.5em;
font-weight: 900;
text-align: center;
color: #black;
margin-bottom: 2em;
@media screen and (max-width: 800px) {
    font-size: 2em;
    margin-top: 1em;
}

span {
    color: #1271ed;
    background-image: linear-gradient(180deg,transparent 60%,rgb(18 113 237 / 30%) 0);

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
margin-top: 5em;
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