import { useContext, useEffect } from "react"
import { Context } from "./main.tsx"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./pages/index.ts"
import { Loader, useMantineColorScheme } from "@mantine/core"

function App() {
  const { user, page, pipe } = useContext(Context)
  const {setColorScheme} = useMantineColorScheme()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
      // pipe.checkPipes()
      console.log(user)
    }
  }, [])
  useEffect(() => {
    setColorScheme('light')
  }, [])
  // const beforeUnload = () => {
  //   page.setLoading(true)
  // }
  // useEffect(() => {
  //   window.addEventListener('beforeunload', beforeUnload)
  //   return () => {
  //     window.removeEventListener('beforeunload', beforeUnload)
  //   }
  // }, [])
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
