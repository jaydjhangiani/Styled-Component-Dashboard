import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from '../data/SidebarData'
import SidebarMenu from './SidebarMenu'
import { IconContext } from 'react-icons/lib'

const Sidebar = () => {

    const [sidebar,setSidebar] = useState(false);

    const showSiderbar = () => setSidebar(!sidebar);

    return (
        <>  
            <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavIcons to="#">
                    <FaIcons.FaBars onClick={showSiderbar}/>
                </NavIcons>
                <NavText>Releaf Dashboard Test</NavText>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcons to="#">
                    <AiIcons.AiOutlineClose onClick={showSiderbar}/>
                </NavIcons>
                {SidebarData.map((item,index) => (
                    <SidebarMenu item={item} key={index}/>
                ))}
                </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const NavIcons = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 760px){
        font-size: 1.5rem;
    }
`

const NavText = styled.h1`
    margin-right: 2rem;
    color: white;

    @media screen and (max-width: 760px){
        font-size: 1.5rem;
    }
`

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`

const SidebarWrap = styled.div`
    width: 100%;
`
