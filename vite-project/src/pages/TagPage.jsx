import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";

function TagPage(){
    const navigate =useNavigate();
    const location= useLocation();
    const tag = location.pathname.split('/').at(-1);
    return(
        <div>
            <Header/>
            <div className="pt-14 sm:w-6/12 flex flex-col space-y-2 w-full items-start mx-5 sm:mx-auto justify-center">
                <button className="px-3 py-1 text-white bg-slate-400 hover:bg-slate-500 rounded-md shadow-lg" onClick={()=>navigate(-1)}>
                    Back
                </button>

                <h2 className="text-lg font-medium italic">Blog Tapped <span className="text-slate-500">#{tag}</span> </h2>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    )
}
export default TagPage;