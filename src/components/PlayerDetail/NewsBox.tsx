import styled from "styled-components"


const NewsBox = () => (
    <Flex>
    <SubTitle>News</SubTitle>
</Flex>

)

const SubTitle = styled.h2`
font-size: 2em;
font-weight: 900;

`

const Flex = styled.div`
display: flex;
justify-content: start;
margin-top: 3em;
flex-direction: column;
}

`

export {NewsBox};