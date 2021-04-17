
import { Route, Switch } from "react-router-dom";
import { PlayerList, PlayerDetail, ClubList, Home } from "./index"
import styled from "styled-components"

const ContentWrapper = () => (

    <Content>
        <Switch>
            <Route exact="true" path="/players">
                <PlayerList />
            </Route>
            <Route exact="true" path="/players/:id">
                <PlayerDetail />
            </Route>
            <Route path="/clubs">
                <ClubList />
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Content>
)

const Content = styled.div`
width: 100%;
min-height: 100vh;
    padding: 80px;
    @media screen and (max-width: 600px) {
      padding: 10px;
      text-align: center;
      padding-top: 40px;

`



export { ContentWrapper };