//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner} ) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅تم اعاده تفعيل البوت لهذه المجموعة𒁂')   
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['تفعيل-المجموعة'] 

export default handler
