let handler = function (m) {
  // this.sendContact(m.chat, '6283131214121', owname, m)
  conn.sendContact(m.chat, '6283131214121', owname, m)
  conn.reply(m.chat, `Tuh Ownerku kak cuman save wa cewe ya kak`, m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler

let owname = global.oname
