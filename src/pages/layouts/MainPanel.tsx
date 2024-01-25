import { AppShell } from "@mantine/core";
import React, { FC, useContext } from "react";
import { Context } from "../../main.tsx";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import '../../ui/styles/mainPanelStyles/iconUser.css';
import '../../ui/styles/mainPanelStyles/userImg.css';
import '../../ui/styles/mainPanelStyles/commonDiv.css';
import '../../ui/styles/mainPanelStyles/leftnavdiv.css';
import '../../ui/styles/mainPanelStyles/iconLogout.css';
import { IconArrowBarLeft, IconUser } from "@tabler/icons-react";


const MainPanel: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, pipe } = useContext(Context);

  const logout = () => {
    user.logout();
    navigate('/registration');
  }

  return (
    <AppShell
      w={'100%'}
      navbar={{ width: 200, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Navbar p="0" className="navbar">
        <div className="commonDiv">
          <div
            className={`menu ${location.pathname === "/main" ? "menu-main" : "menu"}`}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/main')}
          >Сводка</div>
          <div
            className={`menu ${location.pathname === "/marking" ? "menu-layouts" : "menu"}`}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/marking')}
          >Магнитограммы</div>
        </div>
        <div className="leftnavdiv" >
          {/* <div style={{ marginBottom: '30px', width: '40px' }}>
            <IconUser width={40} height={40} />
          </div> */}
          <div>
            {user.user.surname} {user.user.name}
          </div>
          <div>
            {user.user.role}
          </div>
        </div>
        <div className="logout">
          <IconArrowBarLeft className="iconLogout" />
          <div style={{ marginLeft: '8px' }} onClick={logout}>Выйти</div>
        </div>
      </AppShell.Navbar>
      <AppShell.Main display={'flex'}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
export default MainPanel;