const c = require('./../Constants');
const sgMail = require('@sendgrid/mail');
const sendMail = async(apiKey,to,from,subject,body,type) => {
    try{
        sgMail.setApiKey(apiKey);
        let msg = {
            to: to,
            from: from,
            subject: subject
        }
        if(type == 'text'){
            msg.text = body;
        }else{
            msg.html = body;
        }
        sgMail.send(msg).then(() => {
            console.log('Email sent');
        }).catch((error) => {
            console.error("Error: ",error);
        });
    }catch(e){
        console.log('Error sending email: '+e.message);
    }
}
module.exports = {sendMail};