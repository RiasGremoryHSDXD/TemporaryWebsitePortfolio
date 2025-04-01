import axios from "axios"
import { useState } from "react"

function ChatBotGemini(){

    const [userAsk, setUserAsk] = useState("")
    const [aiResponce, setAiResponce] = useState("")

    async function generateAnswer(userQuestion:string){
        console.log("Loading...")
        const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAuuf0Fhz99cw1CenY8Iul3RrSH1FgipMs",
                method: "post",
                data:
                {
                    contents:
                    [
                        {
                            parts:
                            [
                                {
                                    text: userQuestion
                                }
                            ]
                        }
                    ]
                }
            })
            setAiResponce(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }

    return(
        <div className="flex justify-center flex-col items-center w-[100vw] h-[100vh] ">
            <h1>Chat AI</h1>
            <input 
                type="text"
                className="border-sky-200" 
                value= {userAsk}
                onChange={(e) => setUserAsk(e.target.value)}
                placeholder="Ask something..."
            />
            <button className="bg-white cursor-pointer" onClick={() => generateAnswer(userAsk)}>Clicks</button>
            {aiResponce}
        </div>
    )
}
export default ChatBotGemini