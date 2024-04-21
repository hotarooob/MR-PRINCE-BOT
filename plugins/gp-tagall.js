let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(`▢ المجموعة : *${groupMetadata.subject}*\n▢ الاعضاء : *${participants.length}*${text ? `\n▢ Message : ${text}\n` : ''}\n\n•━━━━•🦇•━━━━•\n\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n\n•━━━━•🦇•━━━━•', null, {
      mentions: users
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
