// MessageParser.tsx
class MessageParser {
    actionProvider: any;
    state: any;
  
    constructor(actionProvider: any, state: any) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse(message: string): void {
        this.actionProvider.generateAnswer(message)    
    }
}

export default MessageParser;