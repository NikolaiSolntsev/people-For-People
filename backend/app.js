require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig/serverConfig');


 const apiRouterPersonalisation = require('./routes/api/routes.personalisation');



const app = express();
const PORT = process.env.PORT ?? 4000;



serverConfig(app);


app.use('/api', apiRouterPersonalisation);




app.listen(PORT, () => {
    console.log(`Go on port ${PORT}`)
})