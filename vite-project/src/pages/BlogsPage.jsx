import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { BaseUrl } from "../BaseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetail from "../components/BlogDetail";

function BlogPage(){
    const newBaseUrl ="https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location= useLocation();
    const navigate = useNavigate();
    const {loading, setLoading} =useContext(AppContext);
    const blogID = location.pathname.split('/').at(-1)
    async function fetchRelatedBlogs() {
        setLoading(true);
        let url= `${newBaseUrl}get-blog?blogId=${blogID}`
        console.log(url)
        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(error){
            console.log("error will fetching related blogs")
        }
        setLoading(false)
        // console.log(relatedBlogs)
    }

    useEffect(()=>{
        if(blogID){
            fetchRelatedBlogs()
        }
    },[Location.pathname]);

    return(
        <>
            <Header/>

<div className="flex flex-col sm:justify-center sm:w-6/12 mx-5 sm:mx-auto py-16">
        <div className="">
             <button  className="px-3 py-1 text-white bg-slate-400 hover:bg-slate-500 rounded-md shadow-lg" onClick={()=>navigate(-1)}>Back</button>

        </div>
    {
        loading ? (<Spinner/>):
        ( blog ? (
                    <div >
                        <BlogDetail post={blog}/>
                        <h2 className="mt-8 text-3xl font-bold text-zinc-600">Related Blogs</h2>
                        {
                            relatedBlogs.map((post)=>{
                               return <div key={post.id}>
                                    <BlogDetail post={post}/>
                                </div>
                            })
                        }
                    </div>
                ):
            ( <p>Bl ogs Not Found</p> )
        )
    }
</div>
        </>
    )
}
 export default BlogPage;