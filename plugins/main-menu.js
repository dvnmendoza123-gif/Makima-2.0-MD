//* Código creado por Félix, no quites créditos *//

import fs from 'fs';
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';
import { promises } from 'fs';
import { join } from 'path';

let handler = async (m, { conn, usedPrefix, text, command }) => {
  try {
    // Comandos para el menú y "CARGANDO COMANDOS" (pueden ser usados por cualquier usuario)
    if (command === 'menu' || command === 'help' || command === 'menú') {
      // Variables para el contexto del canal
      const dev = 'Félix Manuel';
      const redes = 'https://dash.kurayamihost.dpdns.org/home';
      const channelRD = { id: "120363418804796632@newsletter", name: "Kurayami Host" };
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/mqtxvp.jpg');

      // Datos usuario y menú
      let { exp, chocolates, level, role } = global.db.data.users[m.sender];
      let { min, xp, max } = xpRange(level, global.multiplier);
      let nombre = await conn.getName(m.sender);
      let _uptime = process.uptime() * 1000;
      let _muptime;
      if (process.send) {
        process.send('uptime');
        _muptime = await new Promise(resolve => {
          process.once('message', resolve);
          setTimeout(resolve, 1000);
        }) * 1000;
      }
      let muptime = clockString(_muptime);
      let uptime = clockString(_uptime);
      let totalreg = Object.keys(global.db.data.users).length;
      let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
      const emojis = '🩵';
      const error = '❌';

      let botname = 'Makima'; // Nombre fijo del bot
      let botStatus = (conn.user.jid === global.conn.user.jid) ? '(OficialBot)' : '(Sub-Bot)';
      if (conn.isBotPrem) {
        botStatus += ' (Premium)';
      }

      let menu = `¡Hola! ${taguser} soy ${botname} ${botStatus}
      
╭━━I N F O-B O T━━
┃Creador: 𓆩‌۫᷼ ִֶָღܾ݉͢ғ꯭ᴇ꯭፝ℓɪ꯭ͨא𓆪
┃Tiempo activo: ${uptime}
┃Baileys: Multi device
┃Moneda actual: ${moneda}
┃Registros: ${totalreg}
╰━━━━━━━━━━━━━

╭━━INFO USUARIO━╮
┃Nombre: ${nombre}
┃Rango: ${role}
┃Nivel: ${level}
╰━━━━━━━━━━━━━

➪ 𝗟𝗜𝗦𝗧𝗔 
       ➪  𝗗𝗘 
           ➪ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦


.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SISTEMA
┃ ┈➤ #formarpareja5
┃ ┈➤ #afk [alasan]
┃ ┈➤ #runtime
┃ ┈➤ #blocklist
┃ ┈➤ #owner
┃ ┈➤ #menu
┃ ┈➤ #menú
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮GRUPOS
┃ ┈➤ #desbanearbot
┃ ┈➤ #banearbot
┃ ┈➤ #enable <opción>
┃ ┈➤ #disable <opción>
┃ ┈➤ #staff
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮SUB BOTS
┃ ┈➤ #qr
┃ ┈➤ #code
┃ ┈➤ #setprimary [@Bot]
╰━━━━━━━━━━━━━

.       ╭ֹ┈ ⵿❀⵿ ┈╮ ㅤ
 ╭ֹ┈ ⵿❀⵿ ┈╮AI
┃ ┈➤ #gemini
┃ ┈➤ #chatgpt <texto>
┃ ┈➤ #ia <texto>
╰━━━━━━━━━━━━━

// ... (el resto del menú permanece igual)

> © ⍴᥆ᥕᥱrᥱძ ᑲᥡ Félix Manuel`.trim();

      // Enviar el menú con banner fijo y respondiendo al mensaje
      await conn.sendMessage(m.chat, {
        image: { url: 'https://qu.ax/XkPVZ.jpg' }, // Banner fijo
        caption: menu,
        contextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: channelRD.id,
            newsletterName: channelRD.name,
            serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
            title: 'Deymoon Club',
            body: dev,
            thumbnailUrl: perfil,
            sourceUrl: redes,
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        }
      }, { quoted: m });

      await m.react(emojis);
    }

  } catch (e) {
    await m.reply(`✘ Ocurrió un error cuando la lista de comandos se iba a enviar.\n\n${e}`, m);
    await m.react('❌');
  }
};

handler.help = ['menu', 'help', 'menú'];
handler.tags = ['main'];
handler.command = ['menu', 'help', 'menú', 'asistenciabot', 'comandosbot', 'listadecomandos', 'menucompleto'];

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

export default handler;