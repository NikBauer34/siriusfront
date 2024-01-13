import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {PipeStore, UserStore} from './modules/store/index.ts'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif'
});

interface IContext {
  user: UserStore,
  pipe: PipeStore
}
export const user = new UserStore()
export const pipe = new PipeStore()
export const Context = createContext<IContext>({
  user,
  pipe
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    user,
    pipe
  }}>
    <MantineProvider defaultColorScheme='light' theme={theme}>
      <App />
    </MantineProvider>
  </Context.Provider>
)
