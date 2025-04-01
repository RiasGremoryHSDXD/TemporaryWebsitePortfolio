import './../css/ChatBot.css'
import { createChatBotMessage } from 'react-chatbot-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import chatBotProfile from './../assets/Web-Portfolio-Logo.png';

const BotIcon = () => <FontAwesomeIcon icon={faRobot} style={{ marginRight: "10px" }} />;

// Custom Avatar Component
const BotAvatar = () => (
  <div className="w-10 h-10 rounded-full overflow-hidden">
    <img 
      src={chatBotProfile}
      alt="ChatBot Avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

const config = {
  botName: "Rias",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you today?", {})
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
      borderRadius: 0, 
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
      borderRadius: 0, 
    },
  },
  customComponents: {
    header: () => (
      <div className="bg-blue-600 text-white flex items-center p-2">
        <BotIcon />
        <span>Rias ChatBot</span>
      </div>
    ),
    botAvatar: (props:any) => <BotAvatar {...props} />,  // Add this line
  },
};

export default config;
