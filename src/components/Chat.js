import React, { Component } from "react";
import "../styles/Chat.css";

import ChatMessageHistory from './ChatMessageHistory';
                                         
class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { message: 'Welcome to the Live Stream!', timestamp: 'Presenter' },
                { message: 'Why is this your favorite sample?', timestamp: 'Customer 1' }                                    
             ],
            inputText: '',
        };
    }
    
    handleSubmit = (e) => {
       e.preventDefault();
       var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Presenter' }]);
       var nextInputText = '';
       this.setState({ messages: nextMessages, inputText: nextInputText });
    };

    onChange = (e) => {
       this.setState({inputText: e.target.value});
    };

    render() {    
       return (
          <div class="chat-window">
             <ChatMessageHistory messages={this.state.messages} />
             <form class="chat-form" onSubmit={this.handleSubmit}>
                <input class="chat-input" type="text" onChange={this.onChange} value={this.state.inputText} />
                <button class="chat-btn">Send</button>
             </form>
          </div>
       );
    }
 };

 export default ChatWindow; 
 