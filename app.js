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


const bot = new Telegraf('1887280803:AAGB0FzoGvfQ30FSlA648zd_1HuYSrvJ_Sc');
bot.launch();
console.log("tbot started")

const connectionString = 'postgres://ag:wtf@localhost:5432/ag';
const pool = new Pool({
    connectionString,
});

bot.command('rank', ctx => {

    console.log(ctx.from)
    console.log(ctx.message.text)
    bot.telegram.sendMessage(ctx.chat.id, `did you say ${ ctx.message.text }?`, {
        
    })
    
    pool.query("SELECT * from ranking_5000 where lemma = 'star';", (err, res) => {  
        
        console.log(res.rows);
        
        for (let row of res.rows) {
            console.log("THIS IS DRE DROID YOUR LOOKING FOR:")
            console.log("This stars rating is: " + row.ranking);
        }
        
    })
    pool.end();
    
})




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


