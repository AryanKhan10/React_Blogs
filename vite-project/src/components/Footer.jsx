import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer(){

    const {page,totalPage,pageHandler, loading} = useContext(AppContext);
    return(
        <div className="w-full flex justify-evenly items-center py-2 fixed bottom-0 bg-white">
            <div>
            {
                page>1 && 
                ( <button className="px-4 py-2 bg-sky-600 text-white mx-2 rounded-md hover:bg-sky-700 shadow-lg" onClick={()=>pageHandler(page-1)}>Previous</button> )
            }
            {
                page<totalPage && 
                ( <button className="px-4 py-2 bg-sky-600 text-white mx-2 rounded-md hover:bg-sky-700 shadow-lg" onClick={()=>pageHandler(page+1)}>Next</button> )
            }
            </div>
            
            
                {loading ?(<></>):
                
                    (<div className="text-md font-medium italic bg-zinc-500 px-3 py-1 rounded-md text-white shadow-lg">
                         page {page} of {totalPage} 
                    </div>)
                }
            
        </div>
    )
}
export default Footer;