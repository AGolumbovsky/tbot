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
    const word =  ctx.message.text.split(' ').slice( 1 ).join(' ');
    
    pool.query("SELECT * from ranking_5000 where lemma = " + "'" + word + "'"  , (err, res) => {  

        console.log("this is what inside the quiery thinks the word is: " + word);
        
        if (err) { console.log("EXTERMINATE! " + err) };
        
        console.log("res.rows is: " + res.rows);
        
        if (word) {
            
            console.log("Object.keys(res.rows) is: " + Object.keys(res.rows).length);
            
            if (Object.keys(res.rows).length > 0) {

                for (let row of res.rows) {

                    console.log("row.lemma is: " + row.lemma + row.lemma.length);

                    let part_of_speech = "problem";

                    switch (row.part_of_sp) {

                    case "m":
                        part_of_speech = "a numeric";
                        break;
                    case "v":
                        part_of_speech = "a verb";
                        break;
                    case "e":
                        part_of_speech = "e";
                        break;
                    case "d":
                        part_of_speech = "d";
                        break;
                    case "j":
                        part_of_speech = "adjective";
                        break;
                    case "r":
                        part_of_speech = "an adverb";
                        break;
                    case "p":
                        part_of_speech = "a pronoun";
                        break;
                    case "t":
                        part_of_speech = "t";
                        break;
                    case "a":
                        part_of_speech = "an article";
                        break;
                    case "u":
                        part_of_speech = "interjection";
                        break;
                    case "i":
                        part_of_speech = "a preposition";
                        break;
                    case "c":
                        part_of_speech = "a conjunction";
                        break;
                    case "x":
                        part_of_speech = "X gonna give it to ya";
                        break;
                    case "n":
                        part_of_speech = "a noun";
                    default:
                        console.log(part_of_speech);
}

                    let message = "The word " + row.lemma + " is ranked " + row.ranking + " as " + part_of_speech;
                    console.log("This stars rating is: " + row.ranking);
                    bot.telegram.sendMessage(ctx.chat.id, message, {});

                }
            } else {
    
                console.log("NO WORD FOR YOU");
                bot.telegram.sendMessage(ctx.chat.id, word + " is not on the list of 5000 most used words", {});
            }
        } else {
            console.log("something went terribly wrong but you don't know what");
            bot.telegram.sendMessage(ctx.chat.id, "Please enter a word", {});
        }
        
    })
    
    ctx.message.text = "";
    // word = "";
    
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