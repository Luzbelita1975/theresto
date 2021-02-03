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
        <SidebarLink to="/"></SidebarLink>
        <SidebarLink to="/pizza">Pizza</SidebarLink>
        <SidebarLink to="/dessert">Desserts</SidebarLink>
        <SidebarLink to="/Full">Full Menu</SidebarLink>
      </SidebarMenu>
      
       

    </SidebarContainer>
    
  );
};

export default Sidebar;

