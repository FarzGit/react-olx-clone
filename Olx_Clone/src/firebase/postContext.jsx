/* eslint-disable react/prop-types */

import { createContext,useState } from "react";
export const postContext = createContext(null)

function PostContextProvider ({children}){
    

    const [postDetails,setPostDetails] = useState()
    

    return(

        <>
        <postContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </postContext.Provider>
        </>
    )

}

export default PostContextProvider


