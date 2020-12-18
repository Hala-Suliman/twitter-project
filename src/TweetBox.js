import React, {useState} from "react";
import Avatar from "./elmoprofilepicture.jpg";



function TweetBox () {
    /* To make the textbox default text empty*/
    const [tweetMessage, setTweetMessage] = useState("");
   
    /*To prevent React from refreshing on submission*/
    const sendTweet= e => {
        e.preventDefault ();
    }
    

return (
<div class="p-6">
    <form class="flex mb-6 w-full">
        <img src={Avatar} alt="Elmo profile" class="rounded-full mr-4 h-20"/> 
            <div class= "w-full">
                <textarea maxLength="140" class="text-lg p-2 w-full h-29" placeholder="What's happening?" type="text"
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} ></textarea> 
            </div>
    </form>
    <div class= "flex justify-end">
      <button onClick={sendTweet} class="bg-blue-500 rounded px-4 mx-50 py-1 ml-50 text-white flex justify-center">Tweet</button>
    </div>
</div>
)
    }
    export default TweetBox;