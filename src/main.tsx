import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {UserStore} from './modules/store/index.ts'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
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
    <MantineProvider defaultColorScheme='auto'>
      <App />
    </MantineProvider>
  </Context.Provider>
)
