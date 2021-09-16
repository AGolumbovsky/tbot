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
console.log("tbot started")

const connectionString = 'postgres://ag:wtf@localhost:5432/ag';
const pool = new Pool({
    connectionString,
});

bot.command('rank', ctx => {
    
    console.log(ctx.message.text);
    var word =  ctx.message.text.split(' ').slice( 1 ).join(' ');
    
    pool.query("SELECT * from ranking_5000 where lemma = " + "'" + word + "'"  , (err, res) => {  

        console.log("this is what inside the quiery thinks the word is: " + word);
        
        if (err) { console.log("EXTERMINATE! " + err) };
        
        console.log("res.rows is: " + res.rows);
        
        if (word) {
            
            
            for (let row of res.rows) {

                let message = "The word " + row.lemma + " is ranked " + row.ranking + " as a " + row.part_of_sp;
                console.log("THIS IS DRE DROID YOUR LOOKING FOR:")
                console.log("This stars rating is: " + row.ranking);
                bot.telegram.sendMessage(ctx.chat.id, message, {});
            }
        } else {
            console.log("NO WORD FOR YOU");
            bot.telegram.sendMessage(ctx.chat.id, word + " is not on the list of 5000 most used words", {});
        }
        
    })
    
    ctx.message.text = "";
    word = "";
    
    // pool.end();
    
});


bot.command('hey', ctx => {
    
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "dafuq you lookin at?", {
        
    });
})

bot.command('love', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "Fuck off, you hippie", {
        
    });
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))