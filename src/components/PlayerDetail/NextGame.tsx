
import styled from "styled-components"
import Countdown from 'react-countdown';

interface Player {
    name: string
}

interface Props {
    player: Player
}

interface CountdownProps {
    days: Number, 
    hours: Number, 
    minutes: Number, 
    seconds: Number, 
    completed: Boolean
}

const NextGame = ({ player }: Props) => {

    const Completionist = () => <span>{player.name} is playing now! Turn on the TV</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownProps) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <TimeWrapper>
                <TimeWrapperItem>
                    <strong>{days}</strong>
                    <span>days</span>
                </TimeWrapperItem>
                <TimeWrapperItem>
                    <strong>{hours}</strong>
                    <span>hours</span>
                </TimeWrapperItem>

                <TimeWrapperItem>
                    <strong>{minutes}</strong>
                    <span>minutes</span>
                </TimeWrapperItem>

                <TimeWrapperItem>
                    <strong>{seconds}</strong>
                    <span>seconds</span>
                </TimeWrapperItem>
            </TimeWrapper>
        }
    };



    return (
        <Row>
            <CountdownItem>
                <Title>Next Game</Title>
                <Countdown date={Date.now() + 90000000} renderer={renderer} />
            </CountdownItem>
        </Row>
    )

}

const TimeWrapper = styled.div`
      display: flex;
          justify-content: space-between;


      `

const TimeWrapperItem = styled.div`
      display: flex;
          flex-direction: column;
          text-align: center;
          @media screen and (max-width: 600px) {
              
            font-size: 0.8em;
          }
      `


const Title = styled.div`
font-size: 2em;
text-align: center;
font-weight:900;
margin-bottom: 0.5em;



`

const Row = styled.div`
display: flex;
justify-content: center;
background: #a9a9a926;
    border-radius: 10px;
    margin-top: 2em;
`

const CountdownItem = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;

@media screen and (max-width: 1100px) {
    width: 90%;

}


width: 40%;

font-size: 1.5em;

strong {
    text-transform: uppercase;
    font-size: 2.5em;
    color:#1271ed;
}
`


export { NextGame };