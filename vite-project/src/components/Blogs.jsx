import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
function Blogs(){
    const {loading, post} = useContext(AppContext);
    console.log(post)
    return(
        <div className="flex flex-col justify-center items-center w-6/12 mx-auto py-10">
            {loading ? (<Spinner/>) : 
                (post.length===0 ?
                (<p>Post Not Found!</p>):
                (
                    (
                        post.map((post) =>{
                            return <div className="flex flex-col my-8"
                             key={post.id}>
                                <p className="text-lg font-bold">{post.title}</p>
                                <p className="text-xs my-1">By <span className="italic font-bold text-slate-500">{post.author}</span> on <span className="italic font-bold text-slate-500">{post.category}</span></p> 
                                <p className="text-sm font-semibold my-1">Posted on <span className="italic text-slate-500">{post.date}</span></p>
                                <p className="my-2 text-balance">{post.content}</p>
                                <div>
                                    {
                                        post.tags.map((tag,index)=>(
                                            <span key={index} className="italic font-semibold text-sm text-blue-600">#{tag}</span>
                                        ))
                                    }
                                </div>
                            </div>
                    })
                )
                ))
            
            }
        </div>
    )
}
export default Blogs;