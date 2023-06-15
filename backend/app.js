require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig/serverConfig');
const apiRouterPersonalisation = require('./routes/api/routes.personalisation');
const apiCountriesRouter = require('./routes/api/routes.countries');
const myServices = require('./routes/api/routes.myServces');
const apiAuthRoute = require('./routes/api/routes.personalisation');
const servicesForMee = require('./routes/api/routes.servicesForMee');
const GetAboutChatMessagesRouter = require('./routes/api/routes.getAboutChatMessages');
const GetAccountChatMessagesRouter = require('./routes/api/routes.getAccountChatMessages');
const dealsRouter = require('./routes/api/routes.deals');
const allDealRouter = require('./routes/api/routes.allDeal');

//////////////////////////////////////////////////////////////////////////
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const httpServer = http.createServer(app);
const io = new socketIO.Server(httpServer);
const { Country, City, User, MessChat } = require('./db/models');

io.on('connection', (socket) => {
  console.log('ws connection', socket.id);

  socket.on('chat:outgoing', async (message) => {
    console.log('new message', message.text.myService_id);

    try {
      const message_chat = await MessChat.create({
        bayer_id: message.text.bayer_id,
        saler_id: message.text.saler_id,
        myService_id: message.text.myService_id,
        by: message.text.by,
        status: false,
        text: message.text.text,
      });

      //if(message.text.by === message.text.bayer_id){ ///////////////////////
      const message_chatBayer = await MessChat.findAll({
        where: {
          myService_id: message.text.myService_id,
          bayer_id: message.text.bayer_id,
          // saler_id: message.text.saler_id  // ?????
        },
        include: { model: User },
      });

      const arr = message_chatBayer.sort((a, b) => b.id - a.id);
      //message = {for: 'bayer', data: arr}

      //io.emit('chat:incoming', message)

      //} //////////////////
      // else {
      const message_chatSaler = await MessChat.findAll({
        where: {
          saler_id: message.text.saler_id,
        },
        include: { model: User },
      });

      const arr1 = message_chatSaler.sort((a, b) => b.id - a.id);
      message = { bayer: arr, saler: arr1 };

      io.emit('chat:incoming', message);

      //}
    } catch (err) {
      console.log(err.message);
    }
    //

    //io.emit('chat:incoming', message)
  });
});

//////////////////////////////////////////////////////

const PORT = process.env.PORT ?? 4000;

serverConfig(app);

app.use('/api/myServices', myServices);
app.use('/api', apiRouterPersonalisation);
app.use('/api/countries', apiCountriesRouter);
app.use('/api/auth', apiAuthRoute);
app.use('/api/servicesForMee', servicesForMee);
app.use('/api/getAboutChatMessages', GetAboutChatMessagesRouter);
app.use('/api/getAccountChatMessages', GetAccountChatMessagesRouter);
app.use('/api/deals', dealsRouter);
app.use('/api/allDeal', allDealRouter);

// app.listen(PORT, () => {
//   console.log(`Go on port ${PORT}`);
// });
httpServer
  .listen(PORT)
  .on('error', (err) => console.log(err.message))
  .on('listening', () => console.log('go on port'));
