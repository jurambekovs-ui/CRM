import { useCookies } from "react-cookie"
import { AuthRoute } from "./routes"
import { DashboardHome } from "./pages"

const App = () => {
  const [cookies] = useCookies(['token'])
  return cookies.token? <DashboardHome/> : <AuthRoute/>
}
export default App
