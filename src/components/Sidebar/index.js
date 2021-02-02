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
        <SidebarLink to="/">Pizza</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      


    </SidebarContainer>
    
  );
};

export default Sidebar;
