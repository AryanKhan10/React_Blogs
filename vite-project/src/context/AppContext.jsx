import { createContext, useEffect, useState } from "react";
import { BaseUrl } from '../BaseUrl';
import axios from 'axios'

//  context creation
export const AppContext = createContext();
console.log(BaseUrl)
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    const fetchData= async(page)=>{
        setLoading(true);

        let url =`${BaseUrl}?page=${page}`
        console.log(url)
        const {data} = await axios.get(url)
        console.log(data);

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
    useEffect(()=>{
        fetchData()
    },[])

    const pageHandler=(page)=>{
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

