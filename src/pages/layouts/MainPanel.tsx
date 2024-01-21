import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { FC, useContext, useEffect, useState } from "react";
import { Context, pipe } from "../../main.tsx";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import '../../ui/styles/mainPanelStyles/iconUser.css';
import '../../ui/styles/mainPanelStyles/userImg.css';
import '../../ui/styles/mainPanelStyles/commonDiv.css';
import '../../ui/styles/mainPanelStyles/leftnavdiv.css';
import '../../ui/styles/mainPanelStyles/iconLogout.css';
import logoGazprom from '../../img/gazprom.png';
import { IconArrowBarLeft } from "@tabler/icons-react";


const MainPanel: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  // const [opened, { toggle }] = useDisclosure();
  const { user, pipe } = useContext(Context);
  // name, surname, role,

  // useEffect(() => {
  //   if (user.isAuth) {
  //     pipe.checkPipes();
  //   }
  // }, []);

  const logout = () => {
    user.logout();
    navigate('/registration');
    // console.log(user.isAuth); //выводит true..?
  }

  return (
    <AppShell
      w={'100%'}
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }, }}
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
          <Burger style={{ filter: 'invert(1)' }} opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger style={{ filter: 'invert(1)' }} opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          {/* <Burger opened={isOpen} onClick={handleUserImgClick} hiddenFrom="sm" size="sm" /> */}
          <div className="commonDiv">
            <div
              className={`menu ${location.pathname === "/main" ? "menu-main" : "menu"}`}
              onClick={() => navigate('/main')}
            >Сводка</div>
            <div
              className={`menu ${location.pathname === "/marking" ? "menu-layouts" : "menu"}`}
              onClick={() => navigate('/marking')}
            >Разметки</div>
          </div>
          <div className="commonDiv">
            <img className="logoImg" src={logoGazprom} />
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <div className="leftnavdiv">
          <div>
            {/* {name.name} */}
          </div>
          <div>
            {/* {surname.surname} */}
          </div>
          <div>
            {/* {role.role} */}
          </div>
        </div>
        <div className="logout">
          <IconArrowBarLeft className="iconLogout" />
          <div style={{ marginLeft: '8px' }} onClick={logout}>Выйти</div>
        </div>
        {/* <Skeleton h={28} mt="sm" animate={true} /> */}

      </AppShell.Navbar>
      <AppShell.Main display={'flex'} style={{ justifyContent: 'center' }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
export default MainPanel;