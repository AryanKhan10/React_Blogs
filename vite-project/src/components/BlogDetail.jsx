import { NavLink } from "react-router-dom";
function BlogDetail({post}){
return(
    <div className="mt-5 w-full">
        <NavLink to={`/blog/${post.id}`} > <span className="font-bold text-lg text-zinc-700 ">{post.title}</span> </NavLink>
        <p className=" my-1 text-sm text-cyan-800 font-semibold">
            By 
            <span className="italic">{post.author}</span> on {" "}

            <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}>
                <span className="font-bold text-cyan-600 italic underline hover:text-cyan-500">{post.category}</span>
            </NavLink>
        </p>
        <p className="text-xs py-1 font-medium">Posted on <span className="italic">{post.date}</span></p>
        <p>{post.content}</p>

        <div className="text-sm py-1">
            {
                post.tags.map( (tag,index)=>{
                    // console.log(tag);
                  return <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className="underline text-sky-600 hover:text-sky-400">{`#${tag}`}</span>
                    </NavLink>
                })
            }
        </div>
    </div>
)
}
export default BlogDetail;

