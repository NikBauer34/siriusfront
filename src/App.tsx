import { useContext, useEffect } from "react"
import { Context } from "./main.tsx"
import { BrowserRouter } from "react-router-dom"
import {AppRouter} from "./pages/index.ts"

function App() {
  const {user} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}

export default App
