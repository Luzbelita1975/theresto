import React from 'react'
import { Router } from 'react-router';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./Sidebar";


const Sidebar = ({isOpen, toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="./Pages/Page-1.jsx">Pizza</SidebarLink>
        <SidebarLink to="./Pages/Page-2.jsx">Desserts</SidebarLink>
        <SidebarLink to="./Pages/Page-3.jsx">Full Menu</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
    
  );
};

export default Sidebar;

