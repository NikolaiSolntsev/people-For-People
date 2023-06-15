import React, { useState } from 'react';
import { ChatMessage } from '../../servicesFoMee/types/ChatMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

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
    <div>
      {user &&
      chatMessage &&
      chatMessage.User.id &&
      user.id === chatMessage.User.id ? (
        <div>
          <h3>ваше сообщение </h3>
          <p>{`${chatMessage.text}`}</p>
        </div>
      ) : (
        <div>
          <h3>{`сообщение от ${chatMessage.User.name} :`}</h3>
          <p>{`${chatMessage.text}`}</p>

          {button ? (
            <button onClick={() => setButton(false)}>написать автору</button>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addChatMessage(
                  chatMessage.bayer_id,
                  chatMessage.myService_id,
                  text
                );
                setButton(true);
                //setText('');
              }}>
              <input type='text' onChange={(e) => setText(e.target.value)} />
              <button type='submit'>отправить</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default AccountChatMessage;
