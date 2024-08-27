import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Blogs from './components/Blogs'
import BlogPage from './pages/BlogsPage'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import Footer from './components/Footer'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
function App() {
const {fetchData} = useContext(AppContext);
const [seachParams, setSearchParams] = useSearchParams();

const location = useLocation();
  useEffect(()=>{
    // fetchData()
    console.log(location)
    const page= seachParams.get("page") ?? 1; //seactParams.get("page") se y tho page ki value do agr nai hai tho 1 kr do( ?? 1)
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log(tag)
      fetchData(Number(page), tag);
    }
    else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log(category)
      fetchData(Number(page),null, category);
    }
    else
    fetchData(Number(page));

},[location.pathname, location.search])
  
  return (
    <>
      {/* <Header/>
      <Blogs/>
      <Footer/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogID' element={<BlogPage/>}/>
        <Route path='/tags/:tag' element={<TagPage/>}/>
        <Route path='/category/:category' element={<CategoryPage/>}/>
      </Routes>

    </>
  )
}

export default App
