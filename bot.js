const mineflayer = require('mineflayer')
function createBot(){
  const bot = mineflayer.createBot({
    host: 'YOUR.aternos.me',
    port: 25565,
    username: 'AFK_Bot_24x7'
  })
  bot.on('spawn', () => {
    console.log('Bot joined!')
    bot.chat('/register bot123 bot123')
    setTimeout(()=> bot.chat('/login bot123'), 2000)
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
      bot.swingArm()
    }, 5000)
  })
  bot.on('end', () => setTimeout(createBot, 15000))
}
createBot()
