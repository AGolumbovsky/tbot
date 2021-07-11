const { Telegraf } = require('telegraf');

const bot = new Telegraf('1887280803:AAGB0FzoGvfQ30FSlA648zd_1HuYSrvJ_Sc');

bot.command('art', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "dafuq you lookin at", {

    })
})

bot.launch();