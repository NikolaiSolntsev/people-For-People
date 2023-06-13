import React from "react";
import ChatMessageItem from "./ChatMessage";
import { ChatMessage } from "../types/ChatMessage";

function ChatMessageList ({chatMessages}: {chatMessages: ChatMessage[]}): JSX.Element {
    return (
        <div>
{chatMessages.map( (chatMessage) => <ChatMessageItem key={chatMessage.id} chatMessage={chatMessage}/>)}
        </div>
    )
}

export default ChatMessageList;