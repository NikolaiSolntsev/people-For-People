import React from "react";
import { ChatMessage } from "../types/ChatMessage";
import User from "../../user/type/User";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function ChatMessageItem ({chatMessage}: {chatMessage: ChatMessage}): JSX.Element {

    const {user} = useSelector( (store: RootState) => store.auth)

    return (
        <div style={{borderStyle: 'solid', borderColor: 'green'}}>
            <p>{`${chatMessage.createdAt}`}</p>
{user && user.id !== chatMessage.User.id ?
 <h5>{`сообщение от : ${chatMessage.User.name}`}</h5>
 :
 <h5 style={{color: 'red'}}>сообщение от вас :</h5>
 }
<p>{`${chatMessage.text}`}</p>
        </div>
    )
}

export default ChatMessageItem;