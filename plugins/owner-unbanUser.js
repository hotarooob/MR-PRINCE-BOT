//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `🦇قم بمنشنه شخص ما لالغاء حظره🦇`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `
🦇تم الغاء الحظر🦇

───────────
@${who.split`@`[0]}🦇الان يمكنك استخدام الاوامر🦇 `, m, { mentions: [who] })
}
handler.help = ['الغاء-الحظر @user']
handler.tags = ['owner']
handler.command = /^الغاء-الحظر$/i
handler.rowner = true

export default handler
