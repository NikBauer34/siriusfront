import React, { FC, useContext } from "react";
import { Context } from "../main.tsx";
import { Route, Routes } from "react-router-dom";
import { MainPanel } from "./layouts/index.ts";
import { firstRouting, publicRouting } from "../modules/constants/index.ts";
import { observer } from "mobx-react-lite";
import { Error404 } from "./index.ts";
const AppRouter: FC = () => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {(user.isAuth) &&
        <Route path="pages" element={<MainPanel />}>
          {firstRouting.map(({ path, component }) =>
            <Route key={path} path={path} Component={component} />
          )}
        </Route>        
      }

      {publicRouting.map(({ path, component }) =>
        <Route key={path} path={path} Component={component} />
      )}
      <Route path="*" Component={Error404} />
    </Routes>
  )
}
export default observer(AppRouter)