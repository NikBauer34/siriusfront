import { useContext, useEffect } from "react"
import { Context } from "./main.tsx"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./pages/index.ts"

function App() {
  const { user } = useContext(Context)
  const { pipe } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
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
