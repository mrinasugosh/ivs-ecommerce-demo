import React, { Component } from "react";
import "../styles/Chat.css";

import ChatMessage from './ChatMessage';


class ChatMessageHistory extends Component {
    render() {      
       var createMessage = (message, index) => {
          return <li class="chat-message" style={{ backgroundColor: ( index % 2 == 1 ) ? '#ddd' : '#efefef' }}><ChatMessage message={message.message} timestamp={message.timestamp} /></li>
       };
       
       return <ul class="chat-history-list">{this.props.messages.map(createMessage)}</ul>;
    }
 };   

 export default ChatMessageHistory;
