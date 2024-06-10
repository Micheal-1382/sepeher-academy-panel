import React, { useEffect, useState } from 'react';
import { useLockedBody } from '../hooks/useBodyLock';
import { NavbarWrapper } from '../navbar/navbar';
import { SidebarWrapper } from '../sidebar/sidebar';
import { SidebarContext } from './layout-context';
import { WrapperLayout } from './layout.styles';

interface Props {
   children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
   const [isMounted, setIsMounted] = useState(false)
   const [sidebarOpen, setSidebarOpen] = React.useState(false);
   const [_, setLocked] = useLockedBody(false);
   const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
      setLocked(!sidebarOpen);
   };

   useEffect(() => {
      setIsMounted(true)
   }, [])
   return (
      <SidebarContext.Provider
         value={{
            collapsed: sidebarOpen,
            setCollapsed: handleToggleSidebar,
         }}
      >
         <WrapperLayout>
            {isMounted ? <><SidebarWrapper />
               <NavbarWrapper>{children}</NavbarWrapper></> : null}
         </WrapperLayout>
      </SidebarContext.Provider>
   );
};
