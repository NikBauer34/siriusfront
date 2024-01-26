import React, { FC, useContext, useEffect } from "react";
import { Context } from "../main.tsx";
import { Route, Routes } from "react-router-dom";
import { MainPanel } from "./layouts/index.ts";
import { firstRouting, publicRouting } from "../modules/constants/index.ts";
import { observer } from "mobx-react-lite";
import { Error404 } from "./index.ts";
import { Loader } from "@mantine/core";

const AppRouter: FC = () => {
  const { user, page } = useContext(Context)
  
  if (page.isLoading) {
    return <Loader h={300} />
  }
  return (
    <Routes>
      {publicRouting.map(({ path, component }) =>
        <Route key={path} path={path} Component={component} />
      )}
      {(user.isAuth) &&
        <Route element={<MainPanel />}>
          {firstRouting.map(({ path, component }) =>
            <Route key={path} path={path} Component={component} />
          )}
        </Route>
      }  
      <Route path="*" Component={Error404} />
    </Routes>
  )
}
export default observer(AppRouter)