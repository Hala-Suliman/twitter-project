import React from "react";
import TweetBox from "./TweetBox";


function Post () {
    return(
        <div class="bg-gray-50 border lg:w-1/2 w-screen">
            {/*Header*/}
            <div className="post_header">
                <h2 class="bg-white p-6 font-bold text-2xl border-b">Home</h2>
            </div>
    
            <TweetBox/>
            
        </div>
    )

}



export default Post;