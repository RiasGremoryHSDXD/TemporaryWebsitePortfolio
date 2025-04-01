import axios from "axios";
import ProfileData from "./ProfileData.json";

class ActionProvider {
  createChatBotMessage: (message: string, options?: object) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  stateRef: any;

  constructor(
    createChatBotMessage: (message: string, options?: object) => any,
    setStateFunc: React.Dispatch<React.SetStateAction<any>>,
    stateRef: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.stateRef = stateRef;
  }

  async generateAnswer(userQuestion: string) {
    try {
        const prompt = `
            You are a portfolio chatbot that uses the following JSON data as your sole source of truth:
            ${JSON.stringify(ProfileData)}
            
            Instructions:
            0. If the user asks about your identity (e.g., "What is your name?", "Who are you?", "Tell me about yourself"), respond with: "My name is Rias, a chatbot assistant powered by Gemini AI, an advanced language model designed to help guide you through my creator's profile and information."
            1. Answer questions only using information explicitly found in the JSON data above.
            2. For greeting or general conversation questions (e.g., "hello", "how are you"), respond in a friendly, human-like tone, referencing only the JSON data for factual details.
            3. Do not provide any information or assumptions that are not present in the JSON data.
            4. If the requested information is not present in the JSON data, reply exactly: "The requested information is not available. Maybe you can rephrase your question?"
            5. When answering questions about the profile data, extract and reformat the details into natural, human-friendly language. Do not return raw JSON or code blocks.
            6. Format lists (if any) as plain text bullet points for easy reading.
            7. Keep your responses concise, friendly, and conversational.
            
            User's question: ${userQuestion}
            `;
      // Make the API call
      const response = await axios({
        url:
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAuuf0Fhz99cw1CenY8Iul3RrSH1FgipMs",
        method: "post",
        data: { contents: [{ parts: [{ text: prompt }] }] },
      });

      // Extract AI response text
      const aiResponseText = response.data.candidates[0].content.parts[0].text;

      // Create a new chatbot message with the AI response
      const message = this.createChatBotMessage(aiResponseText);

      // Update the chatbot state to add the new message
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
      console.log(this.setState)
      
    } catch (error) {
      console.error("Error generating answer:", error);
    }
  }
}

export default ActionProvider;
