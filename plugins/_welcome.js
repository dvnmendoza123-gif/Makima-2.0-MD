import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/f3ngou.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = 'Daymon Tanjiro-Bot'
  let txt1 = 'Daymon Tanjiro-Bot'
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 ${groupMetadata.subject}\n\n✰ @${m.messageStubParameters[0].split`@`[0]}\nシ︎ 𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐝𝐞 𝐭𝐮 𝐞𝐬𝐭𝐚𝐝𝐢𝐚 𝐚𝐪𝐮𝐢 𝐞𝐧 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨\n> 𝐔𝐬𝐚 #help 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.\nhttps://Tanjiro-bot-page.vercel.app/`    
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }

  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `𝐀𝐝𝐢𝐨𝐬 𝐃𝐞 ${groupMetadata.subject}\n\n✰ @${m.messageStubParameters[0].split`@`[0]}\n\nシ︎ 𝐀𝐡𝐨𝐫𝐚 𝐪𝐮𝐞𝐝𝐚𝐦𝐨𝐬 ${groupSize} 𝐌𝐢𝐞𝐦𝐛𝐫𝐨𝐬.\n> 𝐔𝐬𝐚 #help 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.\nhttps://chat.whatsapp.com/Esq4atFu7XM6gwP0sJOwU6?mode=wwt`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }}