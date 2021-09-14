const { Telegraf } = require('telegraf');
const { Pool, client } = require('pg');

// if (!Object.entries)
//    Object.entries = function( obj ){
//       var ownProps = Object.keys( obj ),
//          i = ownProps.length,
//          resArray = new Array(i); // preallocate the Array

//       while (i--)
//          resArray[i] = [ownProps[i], obj[ownProps[i]]];
//       return resArray;
//    };


const pool = new Pool({
    user: 'ag',
    host: 'database.server.com',
    database: 'postgres',
    password: 'teleGr0t',
    port: 3211,
});

// uses env variables to connect
// something tells me it will break to shit on windows. or on linux. either way, it's going to screw me somehow
pool.query('SELECT NOW()', (err, res) => {
    console.log("buggitybug");
    console.log(err, res);
    pool.end();
});

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


