/**
 * Copyright 2017-present, Elo Software. All rights reserved.
 *
 */

import https from 'https';
import fs from 'fs';
import express from'express';
import bodyParser from 'body-parser';
import request from 'request';

import webhooks from './routes/webhooks';

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.elo-comp.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.elo-comp.com/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/www.elo-comp.com/chain.pem')
};

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
export const httpsServer =  https.createServer(options, app);

app.use('/webhook', webhooks);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

httpsServer.listen(8443, () => {
    console.log('Example app listening on port 8443!')
})

export default app;

