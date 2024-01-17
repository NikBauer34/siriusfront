import { useContext, useEffect } from "react"
import { Context } from "./main.tsx"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./pages/index.ts"
import { useMantineColorScheme } from "@mantine/core"

function App() {
  const { user, pipe } = useContext(Context)
  const {setColorScheme} = useMantineColorScheme()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
      console.log(pipe)
    }
  }, [])
  useEffect(() => {
    setColorScheme('light')
  }, [])
  useEffect(() => {
    if (user.isAuth) {
      pipe.checkPipes()
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
