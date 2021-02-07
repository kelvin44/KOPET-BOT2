biarkan penangan = fungsi (m) {

  if (! m.quoted) membuang 'Balas pesan bot!'

  biarkan {fromMe, id, isBaileys} = m.quoted

  if (! fromMe) throw 'Hanya bisa menghapus pesan dariku'

  if (! isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'

  this.deleteMessage (m.chat, {

    dari saya,

    Indo,

    remoteJid: m.chat

  })

}

handler.help = ['del', 'delete']

handler.tags = ['info']

handler.command = / ^ del (ete)? $ / i

module.exports = handler </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> < / s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </s> </ s > </s> </s> </s> orang </s>,
