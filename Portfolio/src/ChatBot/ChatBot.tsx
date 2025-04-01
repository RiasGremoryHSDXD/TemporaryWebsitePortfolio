import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './ChatBotConFig.tsx';
import MessageParser from './MessageParser.tsx';
import ActionProvider from './ActionProvider.tsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function ChatBot() {
    const [display_bot, setDisplay_bot] = useState(false)

    let open_chat = () => 
    {
        setDisplay_bot(true)
    }

    let close_chat = () =>
    {
        setDisplay_bot(false)
    }

    return (

        <div className='fixed bottom-4 right-4 w-fit h-fit  flex flex-col items-end'>
            <button className={`${display_bot ? '' : 'hidden'} bg-blue-600 w-fit h-fit p-[2px_10px_2px_10px] rounded-[5px_5px_0px_0px] cursor-pointer top`}  onClick={close_chat}>
                <FontAwesomeIcon icon={faXmark} size='lg'/>
            </button>
            <div className={`${display_bot ? '' : 'hidden'} `}>
                <Chatbot 
                    config={config} 
                    messageParser={MessageParser} 
                    actionProvider={ActionProvider} 
                />
            </div>
            <button className={`${display_bot ? 'hidden' : ''} p-2 bg-sky-300 rounded-xl cursor-pointer hover:bg-green-50`}  onClick={open_chat}>Open Bot</button>
        </div>

    );
}

export default ChatBot;
