import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `*مرحبا ${name} رقم المطور الوكارد هو:*`;
  }
  
  m.react('🗣️');

  const msg = encodeURIComponent(text);
  
  const res = await fetch(`https://ultimetron.guruapi.tech/gpt3?prompt=${msg}`);

  const json = await res.json();
  
  
    let reply = json.completion;
    m.reply(reply);

};

handler.help = ['bot'];
handler.tags = ['fun'];
handler.command = ['المطور'];

export default handler;
