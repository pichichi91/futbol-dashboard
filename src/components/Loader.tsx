import styled from "styled-components"
import { ThreeDots  as SVG   } from 'svg-loaders-react'


const Loader = () => (<Center>
        <SVG   fill="#1271ed" />
        </Center>
    
    
    )


    const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60vh;
`
export {Loader};