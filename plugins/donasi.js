let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Smartfren:* [-]
┣➥ *Tri:* [-]
┣➥ *Dana:* [-]
┣➥ *Saweria:* [-]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6283131214121*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
