import TelegramBot from 'node-telegram-bot-api';
const dbot = require('dbot-js');
require('dotenv').config()

const token = String(process.env.TELEGRAM_TOKEN);

class Boot {

    init() {
        
        const options     = { polling: true };
        const lustria_bot = new TelegramBot(token, options);

        lustria_bot.on('message', function(msg: any) {
            let chatId = msg.chat.id;
            let message = msg.text.toString();

            dbot.get_response(message, function(err: any, result: any){

                if (!err) {
                    lustria_bot.sendMessage(chatId, result);

                    console.log('Sent - ', JSON.stringify({chatId: chatId, result: result}));
                    
                }else{
                    console.log('Error: ', err.Error);
                    
                }

            })
        })
    }

}

let boot = new Boot;

boot.init();



