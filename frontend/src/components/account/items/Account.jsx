import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import AccountService from "./AccountService";
import { socket } from "../../servicesFoMee/items/AboutServiceForMee";
import AccountChatMessage from "./AccountChatMessage";



let messagesSet;

socket.on('connect', () => {
    console.log('ws account')
  })

  socket.on('chat:incoming', (message) => {
    if(message.for === 'saler') {
        messagesSet(message.data)
    }
        })



function Account (){

const {user} = useSelector( (store) => store.auth);
const {myServices} = useSelector( (store) => store.allServices);
const services = myServices.filter(service => service.seller_id === user?.id)

const [messages, setMessages] = useState([]);
messagesSet = setMessages;


//????????
function addChatMessage(bayer_id, myService_id, text) {
    socket.emit('chat:outgoing', 
    {text: {
    bayer_id,
    saler_id: user.id,
    myService_id ,
    by: user.id,
    text
    }, timestemp: new Date()}
    )
  }


    return (
        <div>
<h1>это ваш аккаунт. ниже услуги, которые вы готовы предоставлять.</h1>
{messages.map(message => <AccountChatMessage key={message.id} chatMessage={message} addChatMessage={addChatMessage}/>) }
{services.map(service => <AccountService key={service.id} service={service}/>)}
        </div>
    )
}

export default Account;