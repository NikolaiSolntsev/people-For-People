require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig/serverConfig');


 const apiAuthRoute = require('./routes/api/routes.personalisation');



const app = express();
const PORT = process.env.PORT ?? 4000;



serverConfig(app);


app.use('/api/auth', apiAuthRoute);




app.listen(PORT, () => {
    console.log(`Go on port ${PORT}`)
})