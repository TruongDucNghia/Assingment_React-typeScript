import { useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { addcate, listCate } from "./api/category"
import CheckRole from "./middlewares/CheckRole"
import CheckUser from "./middlewares/CheckUser"
import Addcate from "./page/admin/category/add"
import Listcate from "./page/admin/category/list"
import Dashboard from "./page/admin/Dashboard"
import HomePage from "./page/client/HomePage"
import Profile from "./page/client/Profile"
import AdminLayout from "./page/layout/AdminLayout"
import WebsiteLayout from "./page/layout/WebsiteLayout"
import { CategoryType } from "./types/category"


function App() {
  useEffect(() =>{
    const getCategory = async () =>{
      const {data} = await listCate()
      setCategory(data)
    }
    getCategory()
  }, [])
  const [categorys, setCategory] = useState<CategoryType[]>([])
  const handleAddCate = async (data: CategoryType) =>{
    await addcate(data)
    setCategory([...categorys, data])
  }
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="profile" element={<CheckUser><Profile/></CheckUser>}/>
      </Route>

      <Route path="/admin" element={<CheckRole><AdminLayout/></CheckRole>}>
        <Route index element={<Navigate to="dashboard" />}/>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="category">
          <Route index element={<Navigate to="list"/>}/>
          <Route path="list" element={<Listcate category={categorys}/>} />
          <Route path="add" element={<Addcate onAdd={handleAddCate}/>} />
          <Route path="update" element={<h1>update cate</h1>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
