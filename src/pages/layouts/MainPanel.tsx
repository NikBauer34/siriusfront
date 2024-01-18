import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { FC, useContext, useEffect } from "react";
import { Context, pipe } from "../../main.tsx";
import { Outlet, useLocation } from 'react-router-dom';
import '../../ui/styles/mainPanelStyles/iconUser.css';
import '../../ui/styles/mainPanelStyles/userImg.css';
import '../../ui/styles/mainPanelStyles/commonDiv.css';
import userIconImg from '../../img/user.png';
import logoGazprom from '../../img/gazprom.png';


const MainPanel: FC = () => {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const { user, pipe } = useContext(Context);

  useEffect(() => {
    pipe.checkPipes();
  }, []);

  const handleUserImgClick = () => {
    toggle();
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 60, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"

    >
      <AppShell.Header className="header" style={{
        background: '#4a9dce',
      }} >
        <Group h="100%" px="md" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <div className="iconUser" onClick={handleUserImgClick}>
            <img className="userImg" src={userIconImg} />
          </div>
          <div className="commonDiv">
            <div className={`menu ${location.pathname === "/pages/main" ? "menu-main" : "menu"}`}>Сводка</div>
            <div className={`menu ${location.pathname === "/pages/layouts" ? "menu-layouts" : "menu"}`}>Разметки</div>
          </div>
          <div className="commonDiv">
            <img className="logoImg" src={logoGazprom} />
          </div>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
export default MainPanel;