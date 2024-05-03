import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatMessage } from '../../servicesFoMee/types/ChatMessage';
import { RootState } from '../../../store';
import './AccountChatMessage.css';

function AccountChatMessage({
  chatMessage,
  addChatMessage,
}: {
  chatMessage: ChatMessage;
  addChatMessage: (
    bayer_id: number,
    myService_id: number,
    text: string
  ) => void;
}): JSX.Element {
  const [button, setButton] = useState(true);
  const [text, setText] = useState('');

  const { user } = useSelector((store: RootState) => store.auth);

  //  console.log(chatMessage)

  return (
    <div className="form-container">
      {' '}
      {user?.language === 'русский' ? (
       
      <form
        className="chat-form"
        onSubmit={(e) => {
          e.preventDefault();
          addChatMessage(chatMessage.bayer_id, chatMessage.myService_id, text);
          setButton(true);
          //setText('');
        }}
      >
        <div className="chat-window">
          <ul className="message-list">
            <div>
              <div>
                <p>Ваше сообщение: </p>
                <p>{`${chatMessage.text}`}</p>
              </div>
              <h3>{`сообщение от ${chatMessage.User.name} :`}</h3>
              <p>{`${chatMessage.text}`}</p>
              <div className="chat-input">
          
                <input
                  className="message-input"
                  placeholder="Type your message here"
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                />
                <button className="send-button" type="submit">
                  Отправить
                </button>
              </div>
            </div>
          </ul>
        </div>
      </form>):(<form
        className="chat-form"
        onSubmit={(e) => {
          e.preventDefault();
          addChatMessage(chatMessage.bayer_id, chatMessage.myService_id, text);
          setButton(true);
          //setText('');
        }}
      >
        <div className="chat-window">
          <ul className="message-list">
            <div>
              <div>
                <p>Your message: </p>
                <p>{`${chatMessage.text}`}</p>
              </div>
              <h3>{`сообщение от ${chatMessage.User.name} :`}</h3>
              <p>{`${chatMessage.text}`}</p>
              <div className="chat-input">
          
                <input
                  className="message-input"
                  placeholder="Type your message here"
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                />
                <button className="send-button" type="submit">
                  Send
                </button>
              </div>
            </div>
          </ul>
        </div>
      </form>)}
    </div>
  );
}

export default AccountChatMessage;
