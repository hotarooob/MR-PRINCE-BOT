//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `•━━━━•🦇•━━━━•\n\nقم بمنشنه شخص ما لجعله مميز \n📌 مثال : ${usedPrefix + command} @مستخدم \n\n•━━━━•🦇•━━━━•`
if (global.prems.includes(who.split`@`[0])) throw '*🦇المستخدم هذا مميز بالفعل!🦇*'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
*✅ اصبح مميزا*

*@${who.split`@`[0]} مبرووووووكككك اصبحت مستخدم مميز*
`, m, { mentions: [who] })

}
handler.help = ['اضف-مميز <@tag>']
handler.tags = ['owner']
handler.command = ['اضف-مميز'] 

handler.group = true
handler.rowner = true

export default handler
