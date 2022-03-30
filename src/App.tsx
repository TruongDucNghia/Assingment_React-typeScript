import { Routes, Route } from "react-router-dom"
import CheckRole from "./middlewares/CheckRole"
import CheckUser from "./middlewares/CheckUser"
import Dashboard from "./page/admin/Dashboard"
import HomePage from "./page/client/HomePage"
import Profile from "./page/client/Profile"
import AdminLayout from "./page/layout/AdminLayout"
import WebsiteLayout from "./page/layout/WebsiteLayout"


function App() {

  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="profile" element={<CheckUser><Profile/></CheckUser>}/>
      </Route>

      <Route path="/admin" element={<CheckRole><AdminLayout/></CheckRole>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default App
