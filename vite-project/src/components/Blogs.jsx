import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetail from "./BlogDetail";
function Blogs(){
    const {loading, post} = useContext(AppContext);
    // console.log(post)
    return(
        <div className="flex flex-col sm:justify-center items-center sm:w-6/12 mx-5 sm:mx-auto pt-8 pb-16">
            {loading ? (<Spinner/>) : 
                (post.length===0 ?
                (<p>Post Not Found!</p>):
                (
                    (
                        post.map((post) =>
                            // return <BlogDetail key={post.id} post={post}/>
                            <BlogDetail key={post.id} post={post} />
                    )
                )
                ))
            
            }
        </div>
    )
}
export default Blogs;