import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from '@mantinex/mantine-logo';
import React, { FC, useContext, useEffect } from "react";
import { Context, pipe } from "../../main.tsx";
import { Outlet } from 'react-router-dom';
const MainPanel: FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const { user, pipe } = useContext(Context)
  useEffect(() => {
    pipe.checkPipes()
  }, [])
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 60, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
export default MainPanel;