//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw ` 🦇قم بمنشنه شخص ما🦇\n\n♦️مثال : ${usedPrefix + command} @شخص`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
🦇تم منع الشخص من استخدام البوت🦇

───────────
@${who.split`@`[0]}🦇الان لا تستطيع استخدام الاوامر🦇`, m, { mentions: [who] })
}
handler.help = ['حظر @user']
handler.tags = ['owner']
handler.command = /^حظر$/i
handler.rowner = true

export default handler
