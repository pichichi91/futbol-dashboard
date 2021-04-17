
import styled from "styled-components"
import Countdown from 'react-countdown';



const TimeWrapper = styled.div`
      display: flex;
          justify-content: space-between;
      `

const TimeWrapperItem = styled.div`
      display: flex;
          flex-direction: column;
          text-align: center;
      `

const CountDownWrapper = ({ player }) => {

    const Completionist = () => <span>{player.name} is playing now! Turn on the TV</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
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
                <NextGame>Next Game</NextGame>
                <Countdown date={Date.now() + 90000000} renderer={renderer} />
            </CountdownItem>
        </Row>
    )

}

const NextGame = styled.div`
font-size: 2em;
text-align: center;
font-weight:900;
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
}

@media screen and (max-width: 1100px) {
    width: 80%;
}


width: 40%;

font-size: 1.5em;
margin-bottom: 1em;

strong {
    text-transform: uppercase;
    font-size: 2.5em;
    color:#1271ed;
}
`


export { CountDownWrapper };