import logo from '../logo.png';
import styled from "styled-components"

import { FiGithub as GithubIcon } from 'react-icons/fi';
import { MdHome } from "react-icons/md";
import { GiPoliceBadge, GiSoccerKick } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav >
      <LogoBox>
        <a href="//gloria.app"> <Logo src={logo} alt="logo" /></a>


      </LogoBox>

      <Items>

        <NavLink exact={true} to="/">
          <ItemBox>

            <MdHome />
            <MenuText>Home</MenuText>
          </ItemBox>

        </NavLink>
        <NavLink to="/players">

          <ItemBox>




            <GiSoccerKick />
            <MenuText>Profiles</MenuText>
          </ItemBox>
        </NavLink>
        <NavLink to="/clubs">

          <ItemBox>
            <GiPoliceBadge />
            <MenuText>Clubs</MenuText>
          </ItemBox>
        </NavLink>

      </Items>

      <Repository>
        <a href="//"> <GithubIcon /></a>

      </Repository>

    </Nav>
  )
}

const MenuText = styled.div`
text-align: center;
`

const Logo = styled.img`
  width: 70%;
  height: 70%;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    width: 50px;
    display: none;

  height: auto;
  }
`
const LogoBox = styled.div`

@media screen and (max-width: 600px) {
max-width: 120px;
}
a {


display: flex;
justify-content: center;
@media screen and (max-width: 600px) {
    justify-content: start

}


}`
const Items = styled.div`
width: 100%;
@media screen and (max-width: 600px) {
  width: auto;
  height: 70px;

display: flex;
}
a.active > div {
  border-color:white;
      background: #ffffff2e;
      transition: all 0.2s ease-in-out;

    opacity: 1;
    @media screen and (max-width: 600px) {
        border-color:transparent;
        height: 70px;
    }
   
}
a.active svg {
  opacity: 1
}

a  {


  transition: all 0.1s ease-in-out;
  :hover {

    * {
    opacity: 1;

    }
  }
}

a > div {
  opacity: 0.5;
  @media screen and (max-width: 600px) {
    padding-bottom: 0em;

  }

  padding-bottom: 1em;

}

svg {
  opacity: 0.5;
  margin: 0 auto;
  font-size: 3em;
  @media screen and (max-width: 600px) {
font-size: 2em;
}
}

`
const Repository = styled.div`

svg {
font-size: 3em;
@media screen and (max-width: 600px) {
font-size: 2.5em;
display: none;
}
color: white;
opacity: 0.5;
transition: all 0.2s ease-in-out;
:hover {
  opacity: 1
}
}
`

const ItemBox = styled.div`
    border-left: 5px solid #1271ed;
    padding-top:  0.5em;
    padding-bottom:  0.1em;


    :hover {
      border-color:#ffffff2e;
      background: #ffffff2e;

      @media screen and (max-width: 600px) {
        border-color:transparent;
        height: 70px;

      }

    }
    @media screen and (max-width: 600px) {
        padding-right: 1em;
        padding-left: 1em;
      }
`



const Nav = styled.nav`
padding-top: 1em;
padding-bottom: 1em;
color: white;
z-index: 100;
position: fixed;
background: #1271ed;
width: 100px;
min-height: 100vh;
top: 0px;
left: 0px;
box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
display: flex;
justify-content: space-between;
align-items: center;
    flex-direction: column;


    @media screen and (max-width: 600px) {

    top: auto;
    bottom: 0px;
    right: 0px;
    width: 100%;
    min-height: 70px;
    height: 70px;
    flex-direction: row;    
    padding-right: 1em;
    padding-left: 1em;
    }
`



export { Navbar };