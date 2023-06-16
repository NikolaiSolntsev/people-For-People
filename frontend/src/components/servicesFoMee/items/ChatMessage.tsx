import React from 'react';
import { useSelector } from 'react-redux';
import { ChatMessage } from '../types/ChatMessage';
import User from '../../user/type/User';
import { RootState } from '../../../store';


function ChatMessageItem({
  chatMessage,
}: {
  chatMessage: ChatMessage;
}): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);

  return (
    <div style={{ borderStyle: 'solid', borderColor: 'green' }}>
      <p>{`${chatMessage.createdAt}`}</p>
      {user && user.id !== chatMessage.User.id ? (
        <p>{`Сообщение от : ${chatMessage.User.name}`}</p>
      ) : (
        <p style={{ color: 'red' }}>Сообщение от вас :</p>
      )}
      <p>{`${chatMessage.text}`}</p>
    </div>
  );
}

export default ChatMessageItem;
