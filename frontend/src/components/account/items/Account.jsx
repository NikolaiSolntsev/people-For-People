import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import AccountService from './AccountService';
import { socket } from '../../servicesFoMee/items/AboutServiceForMee';
import AccountChatMessage from './AccountChatMessage';
import Profile from '../item/Profile';
import './Account.css';

let messages = [];

socket.on('connect', () => {
  console.log('ws account');
});

socket.on('chat:incoming', (message) => {
  messages = message.saler;
});

function Account() {
  const { user } = useSelector((store) => store.auth);
  const { myServices } = useSelector((store) => store.allServices);
  const services = myServices.filter(
    (service) => service.seller_id === user?.id
  );

  const [draw, setDraw] = useState(true);
  //const [messages, setMessages] = useState([]);

  //messagesSet = setMessages;

  useEffect(() => {
    setInterval(() => {
      setDraw((prev) => !prev);
    }, 300);
  }, []);

  function getAccountChatMessages() {
    fetch(`/api/getAccountChatMessages/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        messages = data.messChats;
      });
  }

  useEffect(() => {
    user && getAccountChatMessages();
  }, [user]);

  //????????
  function addChatMessage(bayer_id, myService_id, text) {
    socket.emit('chat:outgoing', {
      text: {
        bayer_id,
        saler_id: user.id,
        myService_id,
        by: user.id,
        text,
      },
      timestemp: new Date(),
    });
  }

  return (
    <div className='wrapper'>
      <div className='wrapperinwrapper'>
        {' '}
        <Profile />
      </div>

      <div className='profil-box'>
        <div className='service-item'>
          {services.map((service) => (
            <div>
              <AccountService key={service.id} service={service} />
            </div>
          ))}
        </div>

        <div className='chat-account-container'>
          <div className='chat-window'>
            {messages.map((message) => (
              <AccountChatMessage
                key={message.id}
                chatMessage={message}
                addChatMessage={addChatMessage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
