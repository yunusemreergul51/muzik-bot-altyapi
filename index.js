const aoijs = require("aoi.js")//https://discord.gg/d3yH59EUvr
const bot = new aoijs.Bot({//https://discord.gg/d3yH59EUvr

token:process.env.bottoken, //The Dark Side Code Share
prefix: "!" 
})
bot.onMessage() 

const thedarkside = require("express")();thedarkside.get
('/', (req, res) =>{res.send("");});thedarkside.listen(8080);

bot.readyCommand({
  channel: "logkanalid",
  code: `Bot aktif oldu.`
})//The Dark Side Code Share

//The Dark Side Code Share https://discord.gg/d3yH59EUvr
bot.command({
  name: "oynat",
  code: `
  $title[Şu an çalınan şarkı $songInfo[title]]
  $description[Şarkı çalınıyor. \n$songInfo[url]\nŞarkının süresi \`$replaceText[$songInfo[duration];Seconds;Saniye]\`]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $color[RANDOM]
  $playSong[$message;10s;no;no;Bir hata oluştu.]

  $suppressErrors[Şarkı bulunamadı.]
  `//The Dark Side Code Share
})
//The Dark Side Code Share https://discord.gg/d3yH59EUvr
bot.command({
  name: "dur",
  code: `
  $title[Durdurulan şarkı $songInfo[title]]
  $description[Şarkının bitmesine kalan süre \`$replaceText[$songInfo[duration_left];Seconds;Saniye]\`]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $color[RANDOM]
  $pauseSong
  
  `
})
//The Dark Side Code Share
bot.command({
  name: "devam",
  code: `
  $title[Durdurulan şarkı $songInfo[title]]
  $description[Şarkının bitmesine kalan süre \`$replaceText[$songInfo[duration_left];Seconds;Saniye]\`]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $color[RANDOM]
  $resumeSong
  $suppressErrors[Şarkı devam ettirilemedi.]
  `
})

bot.command({
  name: "kuyruk",
  code: `
  $description[**$queue[1;10;{number} - {title} - Çalan kişi: <@{userID}>]**]
  $color[RANDOM]
  $suppressErrors[Kuyruk boş.]
  `
})
//The Dark Side Code Share
bot.command({
  name: "geç",
  code: `
  $description[Bi sonraki şarkıya geçildi. Geçilen şarkı $songInfo[title]]
  $color[RANDOM]
  $skipSong
  `
})

bot.command({
  name: "bitir",
  code: `
  $description[Şarkı bitirildi.]
  $color[RANDOM]
  $clearSongQueue
  $leaveVC
  
  `
})
//The Dark Side Code Share https://discord.gg/d3yH59EUvr
bot.musicEndCommand({ 
channel: "$channelID", 
code: `Müzik çalmadığı için ses kanalından ayrıldım.
$clearSongQueue` 
})

bot.command({
  name: "yardım",
  code: `
  $title[Yardım Menüsü]
  $description[**!oynat** -- \`Şarkı çalmanızı sağlar.\`
  **!dur** -- \`Şarkıyı durdurmanızı saplar.\`
  **!devam** -- \`Şarkıyı kaldığı yerden devam ettirir.\`
  **!kuyruk** -- \`Şarkı kuyruğunu görüntüler.\`
  **!geç** -- \`Bi sonraki şarkıya geçmenizi sağlar.\`
  **!bitir** -- \`Şarkıyı bitirmenizi sağlar.\`]
  $color[RANDOM]
  $footer[$username;$authorAvatar]
  $addTimestamp
  `

})//The Dark Side Code Share https://discord.gg/d3yH59EUvr
/////////////////////Bunlara Gerek Yok Ama Dursun\\\\\\\\\\\\\\\\\
// bot.command({
//   name: "yenile",
//   code: `
// $reboot
//   $channelSendMessage[$channelID;Yenilendi.]
//   `
// })
// bot.command({
//   name: "kuyruğu-temizle",
//   code: `
//   $description[Kuyruk temizlendi.]
//   $color[RANDOM]
//   $clearSongQueue


//   `
// })