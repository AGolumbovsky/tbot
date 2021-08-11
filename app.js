const { Telegraf } = require('telegraf');

// if (!Object.entries)
//    Object.entries = function( obj ){
//       var ownProps = Object.keys( obj ),
//          i = ownProps.length,
//          resArray = new Array(i); // preallocate the Array

//       while (i--)
//          resArray[i] = [ownProps[i], obj[ownProps[i]]];
//       return resArray;
//    };

const bot = new Telegraf('1887280803:AAGB0FzoGvfQ30FSlA648zd_1HuYSrvJ_Sc');

bot.command('hey', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "dafuq you lookin at?", {

    })
})

bot.command('love', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "Fuck off, you hippie", {

    })
})

bot.command('rank', ctx => {
    console.log(ctx.from)
    console.log(ctx.message.text)

    bot.telegram.sendMessage(ctx.chat.id, `did you say ${ ctx.message.text }?`, {
        
    })
})

console.log("tbot started")
bot.launch();