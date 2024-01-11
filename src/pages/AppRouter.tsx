import React, {FC, useContext} from "react";
import { Context } from "../main.tsx";
import { Route, Routes } from "react-router-dom";
import {MainPanel} from "./layouts/index.ts";
import { firstRouting, publicRouting, secondRouting } from "../modules/constants/index.ts";
import {observer} from "mobx-react-lite";
const AppRouter: FC = () => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {(user.isAuth && user.user.role == 'первая ступень') && 
        <Route path="pages" element={<MainPanel/>}>
          {firstRouting.map(({path, component}) => 
            <Route key={path} path={path} Component={component} />
          )}
        </Route>
      }
      {(user.isAuth && user.user.role == 'первая ступень') &&
        <Route path="pages" element={<MainPanel/>}>
          {firstRouting.map(({path, component}) => 
            <Route key={path} path={path} Component={component} />
          )}
          {secondRouting.map(({path, component}) => 
            <Route key={path} path={path} Component={component} />
          )}
        </Route>
      }
      {publicRouting.map(({path, component}) => 
        <Route key={path} path={path} Component={component} />
      )}
    </Routes>
  )
}
export default observer(AppRouter)