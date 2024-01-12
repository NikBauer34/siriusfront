import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {UserStore} from './modules/store/index.ts'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif'
});

interface IContext {
  user: UserStore
}
export const user = new UserStore()

export const Context = createContext<IContext>({
  user
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    user
  }}>
    <MantineProvider defaultColorScheme='auto' theme={theme}>
      <App />
    </MantineProvider>
  </Context.Provider>
)
