import { createContext, useEffect, useState } from "react";
import { BaseUrl } from '../BaseUrl';
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";

//  context creation
export const AppContext = createContext();
console.log(BaseUrl)
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const navigate = useNavigate();
    const fetchData= async(page, tag, category)=>{
        console.log(tag,category)
        setLoading(true);
        let url =`${BaseUrl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
            console.log(url)
        }
        if(category){
            url+=`&category=${category}`
            console.log(url)
        }
        // console.log(url)
        const {data} = await axios.get(url)
        // console.log(data);

            setPost(data.posts)
            setPage(data.page)
            setTotalPage(data.totalPages)
        // try{
        //     const res= await fetch(url);
        //     const data =await res.json();
        //     console.log(data);
        //     setPost(data.posts)
        //     setPage(data.page)
        //     setTotalPage(data.totalPages)
        // }
        // catch(error){
        //     console.log("somethinhg went wronge")
        // }
        setLoading(false);

    }


    const pageHandler=(page)=>{
        // setPage(page)
        navigate({search: `?page=${page}`})
        setPage(page)
        fetchData(page)
    }

    const value={
        loading,
        setLoading,
        post,
        setPost,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchData,
        pageHandler
    };
    return  <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>

}

