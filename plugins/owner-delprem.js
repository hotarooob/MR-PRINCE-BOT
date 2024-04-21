//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(`🦇قم بمنشنه شخص ما🦇\n\n📌 *مثال* :\n${usedPrefix + command} @مستخدم`)
    if (!global.prems.includes(who.split`@`[0])) throw '*🦇المستخدم هذا ليس مميزا بالفعل!🦇*'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat,`*🦇تم الحذف من مستخدم مميز🦇* \n\n*@${who.split('@')[0]}لم تعد مستخدم مميز الان*`, m, { mentions: [who] })
    
}
handler.help = ['احذف-مميز @user']
handler.tags = ['owner']
handler.command = ['احذف-مميز'] 

handler.group = true
handler.rowner = true

export default handler
