import React from "react";
import { ChatMessage } from "../types/ChatMessage";
import User from "../../user/type/User";

function ChatMessageItem ({chatMessage}: {chatMessage: ChatMessage}): JSX.Element {
    return (
        <div>
<h5>{`сообщение от : ${chatMessage.User.name}`}</h5>
<p>{`${chatMessage.text}`}</p>
        </div>
    )
}

export default ChatMessageItem;