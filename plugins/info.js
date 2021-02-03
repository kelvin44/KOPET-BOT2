let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/kelvin44/

*Sosmed :*
Kritik kami di sosmed ataupun WhatsApp.
Instagram: @ff.kelvin15
➥ WhatsApp:
wa.me/6281218305935

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI BOT 〙 ═
╠➥ Dana : 0852-1283-0930
╠➥ Tsel: 0812-1830-5935
╠➥ Indosat: 0815-1586-0089
║>Request? Wa.me/6281218305935
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

