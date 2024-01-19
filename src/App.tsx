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
      pipe.checkPipes()
      console.log(user)
    }
  }, [])
  useEffect(() => {
    setColorScheme('light')
  }, [])
  if (page.isLoading) {
    return <Loader h={300} />
  }
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
