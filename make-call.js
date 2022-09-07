// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// import {TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN} from 'dotenv'

// const TWILIO_ACCOUNT_SID= "ACd065e35d52953d2914b5694aaf4f2806"
// const TWILIO_AUTH_TOKEN = "0c8749a2fb5de547c689b59300a4cb2e"
require('dotenv').config();

const accountSid = "ACd065e35d52953d2914b5694aaf4f2806";
const authToken = "9d7e787465fc85f75d6555e0bc4018ee";
// const client = require('twilio')(accountSid, authToken);

const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+91 97481 21112',
         from: '+12183094580'
       }, function(err, call) {
        if(err) {
            console.log(err);
        }else{
            console.log("callid",call.sid)
        }
       })
    //   .then(call => console.log(call.sid));
