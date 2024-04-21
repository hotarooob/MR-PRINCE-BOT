//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅تم منع البوت من التفاعل مع هذه المجموهة𒁂')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['حظر-المجموعة'] 

export default handler
 
